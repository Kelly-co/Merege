const projectsUsersRouter = require("express").Router();
const ProjectUser = require("../models/projectUser");

projectsUsersRouter.get("/projects-users", (req, res) => {
  ProjectUser.findAll()
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving users from database");
    });
});

module.exports = projectsUsersRouter;
