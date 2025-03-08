const express = require("express");
require("express-async-errors");
const router = express.Router();

const { body, query, param } = require("express-validator");
const { commonValidate } = require("../middleware/expressValidator");

const categoryController = require("../controller/Course/categoryController");

/**
 * @openapi
 * '/api/categories':
 *  get:
 *     tags:
 *     - Category Controller
 *     summary: Get all categories
 *     security:
 *       - BearerAuth: []
 *     parameters: []
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
router.get("/", categoryController.getCategoryListAsync);

module.exports = router;
