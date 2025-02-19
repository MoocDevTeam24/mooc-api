var express = require("express");
require("express-async-errors");
var router = express.Router();

const { body, query, param } = require("express-validator");
const { commonValidate } = require("../middleware/expressValidator");

var usercontroller = require("../controller/usercontroller");

/**
 * @openapi
 * '/api/users':
 *  post:
 *     tags:
 *     - User Controller
 *     summary: add user
 *     description: add user
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - username
 *              - password
 *              - email
 *              - age
 *              - gender
 *            properties:
 *              username:
 *                type: string
 *                default: admin
 *              password:
 *                type: string
 *                default: 123456
 *              email:
 *                type: string
 *                default: demo@demo.com
 *              age:
 *                type: number
 *                default: 30
 *              gender:
 *                type: number
 *                default: 1
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
  "",
  commonValidate([
    body("username").notEmpty().withMessage("Not a valid username"),
    body("password").notEmpty().isLength({ min: 6 }),
    body("email").isEmail().withMessage("Not a valid email"),
  ]),
  usercontroller.addUserAsync
);

/**
 * @openapi
 * '/api/users/getUser':
 *  get:
 *     tags:
 *     - User Controller
 *     summary: Get a user by username
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *      - name: username
 *        in: query
 *        description: The username of the user
 *        required: true
 *     responses:
 *      200:
 *        description: Fetched Successfully
 *      400:
 *        description: Bad Request
 *      401:
 *        description: Unauthorized
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
router.get(
  "/getUser",
  commonValidate([
    query("username").notEmpty().withMessage("Not a valid username"),
  ]),
  usercontroller.getUserAsync
);

/**
 * @openapi
 * '/api/users/{page}/{pageSize}':
 *  get:
 *     tags:
 *     - User Controller
 *     summary: Get all users
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *      - name: page
 *        in: path
 *        description: page
 *        required: true
 *      - name: pageSize
 *        in: path
 *        description: pageSize
 *        required: true
 *     responses:
 *      200:
 *        description: Fetched Successfully
 *      400:
 *        description: Bad Request
 *      401:
 *        description: Unauthorized
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
router.get(
  "/:page/:pageSize",
  commonValidate([
    param("page")
      .notEmpty()
      .isInt({ allow_leading_zeroes: false, min: 1 })

      .withMessage("Not a valid page"),
    param("pageSize")
      .notEmpty()
      .isInt({ allow_leading_zeroes: false, min: 1 })

      .withMessage("Not a valid page"),
  ]),
  usercontroller.getUserListAsync
);

/**
 * @openapi
 * '/api/users/{ids}':
 *  delete:
 *     tags:
 *     - User Controller
 *     summary: delete a user by Id
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *      - name: ids
 *        in: path
 *        description: The id of the user
 *        required: true
 *     responses:
 *      200:
 *        description: Fetched Successfully
 *      400:
 *        description: Bad Request
 *      401:
 *        description: Unauthorized
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
router.delete(
  "/:ids",
  param([param("ids").notEmpty().withMessage("Not a valid id")]),
  usercontroller.deUserByIdAsync
);

/**
 * @openapi
 * '/api/users':
 *  put:
 *     tags:
 *     - User Controller
 *     summary: update user
 *     description: update user
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - id
 *              - username
 *              - email
 *              - age
 *              - gender
 *            properties:
 *              id:
 *                type: number
 *                default: 0
 *              username:
 *                type: string
 *                default: admin
 *              email:
 *                type: string
 *                default: demo@demo.com
 *              age:
 *                type: number
 *                default: 30
 *              gender:
 *                type: number
 *                default: 1
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
router.put(
  "",
  commonValidate([
    body("username").notEmpty().withMessage("Not a valid username"),
    body("id").notEmpty().withMessage("Not a valid id"),
  ]),
  usercontroller.updateUserAsync
);

/**
 * @openapi
 * '/api/users/getUserById':
 *  get:
 *     tags:
 *     - User Controller
 *     summary: Get a user by id
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *      - name: id
 *        in: query
 *        description: The id of the user
 *        required: true
 *     responses:
 *      200:
 *        description: Fetched Successfully
 *      400:
 *        description: Bad Request
 *      401:
 *        description: Unauthorized
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
 router.get("/getUserById",
  commonValidate([
    query("id").notEmpty().withMessage("Not a valid id"),
  ]),
  usercontroller.getUserByIdAsync
);

module.exports = router;
