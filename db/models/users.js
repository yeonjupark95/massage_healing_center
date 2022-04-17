// grab our db client connection to use with our adapters
const client = require('../client');
const bcrypt = require("bcrypt");

const getAllUsers =  async () => {
  try{
    const {rows: users} = await client.query(`
      SELECT * FROM users;
    `)
    return users;
  } catch(error){
    throw error;
  }
}

const createUser = async ({username, password}) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  try{
    const {rows: [user]} = await client.query(`
      INSERT INTO users(username, password)
      VALUES($1, $2)
      ON CONFLICT (username) DO NOTHING
      RETURNING *;
    `,
    [username, hashedPassword]);
    delete user.password;
    return user;
  } catch(error){
    throw error;
  }
}

module.exports = {
  // add your database adapter fns here
  getAllUsers,
  createUser
};