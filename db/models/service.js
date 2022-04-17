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

const getServiceById = async (id) => {
  try {
    const {
      rows: [service],
    } = await client.query(
      `SELECT * FROM service
            WHERE id = $1;
            `,
      [id]
    );
    return service;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getServiceById,
  createService,
};
