const connection = require("../config");
const db = connection.promise();
const bcrypt = require("bcrypt");

const findByEmail = (email) => {
  return db
    .query("SELECT * FROM users WHERE email = ?", [email])
    .then(([results]) => results[0]);
};

const findUsers = () => {
  return db.query("SELECT * FROM users").then(([results]) => results);
};

const verifyPassword = async (plainPassword, hashedPassword) => {
  console.log(bcrypt.compareSync(plainPassword, hashedPassword));
  return bcrypt.compareSync(plainPassword, hashedPassword);
};

module.exports = {
  findByEmail,
  verifyPassword,
  findUsers,
};
