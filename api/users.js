const usersRouter = require("express").Router();
const { getUser, createUser, getUserByUsername } = require("../db");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { JWT_SECRET } = process.env;

usersRouter.post("/login", async (req, res, next) => {
    const { username, password } = req.body;
    if (!username || !password) {
      return next({
        name: "MissingCredentialsError",
        message: "Please supply both a username and password",
      });
    }
  
    try {
      const user = await getUser({ username, password });
      if (user) {
        const token = jwt.sign(user, JWT_SECRET);
        res.send({
          user,
          token,
          message: `Welcome back ${user.username}! `,
        });
      } else {
        next({
          name: "IncorrectCredentialsError",
          message: "Username or password is incorrect",
        });
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

module.exports = usersRouter;
