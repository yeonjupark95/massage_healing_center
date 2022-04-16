const client = require("./client");

const dropTables = async() => {
    try {
      console.log("Dropping All Tables...");
      await client.query(`
        `);
      console.log("Finished dropping tables...");
    } catch (error) {
      throw error;
    }
  }

const createTables = async () => {
    await client.query(`
        CREATE TABLE service(
            id SERIAL PRIMARY KEY,
            name VARCHAR(255),
            description VARCHAR(255),
            category VARCHAR(255),
            price int
        )
    `)
}
