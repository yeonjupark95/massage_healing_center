// database adapter files
const client = require('./client');
const models = require('./models');

module.exports = {
  client,
  ...models,
};
