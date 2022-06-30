const express = require("express");
const app = express();
const connection = require("./config");
const port = process.env.PORT || 5000;
const projectsRouter = require("./routes/projects");

connection.connect((err) => {
  if (err) throw err;
  console.log("Successfully connected to the database");
});

app.use(express.json());

app.use(projectsRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`App is listening at ${port}`);
});
