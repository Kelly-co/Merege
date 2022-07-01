const usersRouter = require("express").Router();
const User = require("../models/users");

usersRouter.get("/users", (req, res) => {
  User.findUsers()
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving users from database");
    });
});

module.exports = usersRouter;
