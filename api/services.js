const servicesRouter = require("express").Router();
const {
  getServiceByCategory,
  getServiceById,
  createService,
  deleteService,
  updateService,
} = require("../db");

servicesRouter.get("/categories/:category", async (req, res, next) => {
  const { category } = req.params;
  try {
    const services = await getServiceByCategory(category);
    res.send(services);
  } catch (error) {
    next(error);
  }
});

servicesRouter.get("/:serviceId", async (req, res, next) => {
  const { serviceId } = req.params;
  try {
    const service = await getServiceById(serviceId);
    res.send(service);
  } catch (error) {
    next(error);
  }
});

servicesRouter.post("/add", async (req, res, next) => {
  const { name, description, category, price } = req.body;
  try {
    const addedService = await createService({
      name,
      description,
      category,
      price,
    });

    if (!name || !description || !category || !price) {
      next({
        name: "MissingFields",
        message: "All fields are required",
      });
    }

    res.send(addedService);
  } catch (error) {
    next(error);
  }
});

servicesRouter.patch("/:serviceId", async (req, res, next) => {
  const { serviceId } = req.params;
  const { name, description, category, price } = req.body;

  try {
    const service = getServiceById(serviceId);

    if (!service) {
      next({
        name: "InvalidService",
        message: "Service does not exist.",
      });
      return;
    }

    const updatedService = await updateService({
      id: serviceId,
      name,
      description,
      category,
      price,
    });

    res.send(updatedService);
  } catch (error) {
    next(error);
  }
});

servicesRouter.delete("/:serviceId", async (req, res, next) => {
  const { serviceId } = req.params;
  try {
    const deletedService = await deleteService(serviceId);
    if (!deletedService) {
      next({
        name: "InvalidService",
        message: "Error deleting this service!",
      });
    }
    res.send(deletedService);
  } catch (error) {
    next(error);
  }
});

module.exports = servicesRouter;
