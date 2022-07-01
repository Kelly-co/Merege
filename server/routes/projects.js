const projectsRouter = require("express").Router();
const Project = require("../models/projects");

projectsRouter.get("/projects", (req, res) => {
  Project.findAllProjects()
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving projects from database");
    });
});

projectsRouter.post("/projects/insert", (req, res) => {
  Project.createProject(req.body)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error saving project to database");
    });
});

projectsRouter.post("/projects/assign", (req, res) => {
  Project.assignProject(req.body)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error saving project to database");
    });
});

module.exports = projectsRouter;
