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

const updateService = async ({ id, ...fields }) => {
  const setString = Object.keys(fields)
    .map((key, index) => `"${key}" = $${index + 1}`)
    .join(", ");
  if (setString.length === 0) {
    return;
  }

  try {
    const {
      rows: [service],
    } = await client.query(
      `
      UPDATE services
      SET ${setString}
      WHERE id = ${id}
      RETURNING *;
    `,
      Object.values(fields)
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

const getServiceById = async (id) => {
  try {
    const { rows: [service] } = await client.query(
      ` SELECT * FROM services
        WHERE id = $1;
      `,
      [id]
    );
    return service;
  } catch (error) {
    throw error;
  }
};

const deleteService = async (id) => {
  try {
    const {
      rows: [service],
    } = await client.query(
      `
      DELETE FROM services
      WHERE id = $1
      RETURNING id;
    `,
      [id]
    );
    return service;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getServiceByCategory,
  getServiceById,
  createService,
  updateService,
  deleteService,
};
