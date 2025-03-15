var express = require("express");
require("express-async-errors");
var router = express.Router();

const { body } = require("express-validator");
const { commonValidate } = require("../middleware/expressValidator");
const { loginValidator } = require("../validator/authValidator");

var authcontroller = require("../controller/authcontroller");

/**
* @openapi
* '/api/auth/login':
*  post:
*     tags:
*     - auht Controller
*     summary: Login as a user return token
*     description: login success get token
*     requestBody:
*      required: true
*      content:
*        application/json:
*           schema:
*            type: object
*            required:
*              - username
*              - password
*            properties:
*              username:
*                type: string
*                default: admin
*              password:
*                type: string
*                default: 123456
*     responses:
*      201:
*        description: Created
*      400:
*        description: Bad Request
*      404:
*        description: Not Found
*      409:
*        description: Conflict
*      500:
*        description: Server Error 
*/
router.post(
  "/login",
  commonValidate(loginValidator),
  authcontroller.loginAsync
);

router.post("/loginOut", authcontroller.loginOutAsync);

module.exports = router;
