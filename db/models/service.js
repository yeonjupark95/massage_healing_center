const client = require("../client");

const createService = async ({ name, description, category, price }) => {
  try {
    const {
      row: [service],
    } = await client.query(
      `
        INSERT INTO service (name, description, category, price)
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
