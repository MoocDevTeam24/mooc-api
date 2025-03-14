const bcrypt = require("bcryptjs");
const logger = require("../common/logsetting");
const { jwtConfig } = require("../appConfig");
const jwt = require("jsonwebtoken");
const userservice = require("../service/userservice");

const loginAsync = async (req, res) => {
  try {
    let username = req.body.username;
    let password = req.body.password;

    if (!username || !password) {
      return res.sendCommonValue(null, "Username and password are required", 0);
    }

    let result = await userservice.getUserbyNameAsync(username);

    if (!result.isSuccess) {
      logger.warn(`Login failed for username: ${username}`);
      return res.sendCommonValue(null, "Authentication failed", 0);
    }

    let isMatch = await bcrypt.compare(password, result.data.password);

    if (!isMatch) {
      logger.warn(`Password mismatch for username: ${username}`);
      return res.sendCommonValue(null, "Authentication failed", 0);
    }

    let user = { id: result.data.id, username: result.data.username };
    let tokenStr = jwt.sign(user, jwtConfig.secret, {
      expiresIn: jwtConfig.expiresIn,
    });

    logger.info(`User logged in: ${username}`);

    return res.sendCommonValue(
      { token: tokenStr, username: username },
      "Login successful",
      1
    );
  } catch (err) {
    logger.error(`Login error for username: ${req.body.username}, error: ${err}`);
    return res.sendCommonValue(null, "Internal server error", 0);
  }


  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       res.sendCommonValue(
  //         { id: 1, name: "login", dt: new Date() },
  //         "loginOutAsync",
  //         1
  //       );
  //       resolve(1);
  //     }, 2000);
  //   });
};

const loginOutAsync = async (req, res) => {
  // let epassword = req.query.password;
  // let result = await bcrypt.compare("123456", epassword);
  res.sendCommonValue("ddd", "loginOutAsync", 1);
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       res.sendCommonValue(
  //         { id: 1, name: "loginOut", dt: new Date() },
  //         "loginOutAsync",
  //         1
  //       );
  //       resolve(1);
  //     }, 2000);
  //   });
};

module.exports = {
  loginAsync,
  loginOutAsync,
};
