const express = require("express");
const app = express();
const connection = require("./config");
const port = process.env.PORT;
const projectsRouter = require("./routes/projects");
const usersRouter = require("./routes/users");
const projectsUsersRouter = require("./routes/projectUser");
const authRouter = require("./routes/auth");

connection.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Successfully connected to the database");
});

app.use(express.json());

app.use("/auth", authRouter);
app.use(projectsRouter);
app.use(usersRouter);
app.use(projectsUsersRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`App is listening at ${port}`);
});
