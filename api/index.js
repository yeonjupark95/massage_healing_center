//routes file
const apiRouter = require("express").Router();
require("dotenv").config();

apiRouter.get("/", (req, res, next) => {
  res.send({
    message: "API is under construction!",
  });
});

apiRouter.get("/health", (req, res, next) => {
  res.send({
    healthy: true,
  });
});

// place your routers here
const servicesRouter = require("./services");
apiRouter.use("/services", servicesRouter);

const usersRouter = require("./users");
apiRouter.use("/users", usersRouter);

module.exports = apiRouter;