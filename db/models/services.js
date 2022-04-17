const client = require("../client");

const createService = async ({ name, description, category, price }) => {
  try {
    const {
      rows: [service],
    } = await client.query(
      `
          INSERT INTO services (name, description, category, price)
          VALUES ($1, $2, $3, $4)
          RETURNING *;
      `,
      [name, description, category, price]
    );
    return service;
  } catch (error) {
    throw error;
  }
};

const getServiceByCategory = async (category) => {
  try {
    const { rows: services } = await client.query(
      ` SELECT * FROM services
        WHERE category = $1;
      `,
      [category]
    );
    return services;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getServiceByCategory,
  createService,
};