const connection = require("../config");
const db = connection.promise();

const findAll = () => {
  return db
    .query("SELECT * FROM projects_users")
    .then(([results]) => results[0]);
};

module.exports = {
  findAll,
};
