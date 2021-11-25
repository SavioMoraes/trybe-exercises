const connectionFactory = require("./connectionFactory");
const schema = require("./schemas");

const create = async (username, email, password, role) => {
  const connection = schema.connection1;
  connectionFactory(connection).execute(
    "INSERT INTO users (username, email, password, role) VALUES (?,?,?,?)",
    [username, email, password, role]
  );
};

module.exports = {
  create,
};
