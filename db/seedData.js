const client = require("./client");
const { createService } = require("./models");

const dropTables = async () => {
  try {
    console.log("Dropping All Tables...");
    await client.query(`
        `);
    console.log("Finished dropping tables...");
  } catch (error) {
    throw error;
  }
};

const createTables = async () => {
  await client.query(`
        CREATE TABLE service(
            id SERIAL PRIMARY KEY,
            name VARCHAR(255),
            description VARCHAR(255),
            category VARCHAR(255),
            price int
        )
    `);
};

const createInitialService = async () => {
  try {
    const deepCleaning = await createService({
      name: "Deep Cleaning Enzyme Peel Facial",
      description:
        "D cleaning, ultra sonic skin scrubber, enzyme peel, hydrating mask, and calming mask",
      category: "facial",
      price: 85,
    });

    const aquaPeel = await createService({
      name: "Aqua Peel Facial",
      description:
        "Deep cleaning, aqua peel machine, cooling ultrasound machine, hydrating mask, calming mask)",
      category: "facial",
      price: 95,
    });

    const koreanDeepTissue60 = await createService({
      name: "Korean Deep Tissue Massage - 60 minute",
      description:
        "Specifically designed for those who require relief of deep aches and pains in targeted areas using accupressure points. Includes radio frequency and LED light therapy",
      category: "facial",
      price: 91,
    });

    const koreanDeepTissue90 = await createService({
      name: "Korean Deep Tissue Massage - 90 minute",
      description:
        "Specifically designed for those who require relief of deep aches and pains in targeted areas using accupressure points. Includes radio frequency and LED light therapy",
      category: "facial",
      price: 129,
    });

    const service = [
      deepCleaning,
      aquaPeel,
      koreanDeepTissue60,
      koreanDeepTissue90,
    ];
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
    await createInitialService();
  } catch (error) {
    throw error;
  }
};

module.exports = {
    rebuildDB,
  };
  