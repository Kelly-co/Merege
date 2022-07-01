const connection = require("../config");
const db = connection.promise();

const findAllProjects = () => {
  let sql = "SELECT * FROM projects";
  return db.query(sql).then(([results]) => results);
};

const createProject = (data) => {
  return db.query("INSERT INTO projects SET ?", data).then(([result]) => {
    const id = result.insertId;
    return { ...data, id };
  });
};

const assignProject = (data) => {
  return db.query("INSERT INTO projects_users SET ?", data).then(([result]) => {
    const id = result.insertId;
    return { ...data, id };
  });
};

module.exports = { findAllProjects, createProject, assignProject };
