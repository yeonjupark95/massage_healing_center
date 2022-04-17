const client = require("./client");
const { createService } = require("./models");

const dropTables = async () => {
  try {
    console.log("Dropping All Tables...");
    await client.query(`
        DROP TABLE IF EXISTS services;
    `);
    console.log("Finished dropping tables...");
  } catch (error) {
    throw error;
  }
};

const createTables = async () => {
  try {
    console.log("Starting to build tables...");

    await client.query(`
    CREATE TABLE services (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        category VARCHAR(255),
        price DECIMAL
    );
  `);
    console.log("Finished building tables!");
  } catch (error) {
    console.error("Error building tables!");
    throw error;
  }
};

const createInitialServices = async () => {
  try {
    console.log("Trying to create initial service");
    const serviceOne = await createService({
      name: "Deep Cleaning Enzyme Peel Facial",
      description:
        "Deep cleaning, ultra sonic skin scrubber, enzyme peel, hydrating mask, and calming mask",
      category: "facial",
      price: 85,
    });
    const serviceTwo = await createService({
      name: "Aqua Peel Facial",
      description:
        "Deep cleaning, aqua peel machine, cooling ultrasound machine, hydrating mask, and calming mask",
      category: "facial",
      price: 95,
    });

    const serviceThree = await createService({
      name: "Korean Deep Tissue Massage - 60 minute",
      description:
        "Specifically designed for those who require relief of deep aches and pains in targeted areas using accupressure points. Includes radio frequency and LED light therapy",
      category: "facial",
      price: 91,
    });

    const serviceFour = await createService({
      name: "Korean Deep Tissue Massage - 90 minute",
      description:
        "Specifically designed for those who require relief of deep aches and pains in targeted areas using accupressure points. Includes radio frequency and LED light therapy",
      category: "facial",
      price: 129,
    });

    const service = [serviceOne, serviceTwo, serviceThree, serviceFour];
    console.log("success creating initial service!");
    console.log("service created:", service);
  } catch (error) {
    throw error;
  }
};

const rebuildDB = async () => {
  try {
    client.connect();
    await dropTables();
    await createTables();
    await createInitialServices();
  } catch (error) {
    console.log("Error during rebuildDB");
    throw error;
  }
};

module.exports = {
  rebuildDB,
};
