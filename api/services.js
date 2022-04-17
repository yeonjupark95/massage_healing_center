const servicesRouter = require("express").Router();
const { getServiceByCategory } = require("../db");

servicesRouter.get("/categories/:category", async (req, res, next) => {
  const { category } = req.params;
  try {
    const services = await getServiceByCategory(category);
    res.send(services);
  } catch (error) {
    next(error);
  }
});

module.exports = servicesRouter;
