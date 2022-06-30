DROP DATABASE IF EXISTS `merege`;
create database `merege`;
use `merege`;

CREATE TABLE `users` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(80) NOT NULL,
    `email` VARCHAR(80) UNIQUE NOT NULL,
    `hashedPassword` varchar(300) NOT NULL,
    `branch` VARCHAR(80) NOT NULL,
    PRIMARY KEY (`id`)
  ) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8;

-- INSERT INTO
--   `users`
-- VALUES
--   (
--     1,
--     'Alexandre',
--     'alexandre@mail.com',
--     ''
--   );

CREATE TABLE `projects` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(40) NOT NULL,
    `subject` VARCHAR(80) NOT NULL,
    `key1` VARCHAR(40) NOT NULL,
    `key2` VARCHAR(40) NOT NULL,
    `key3` VARCHAR(40) NOT NULL,
    `language1` VARCHAR(40) NOT NULL,
    `language2` VARCHAR(40),
    `language3` VARCHAR(40),
    `description` VARCHAR(255) NOT NULL,
    `start_date` DATE NOT NULL,
    `end_date` DATE NOT NULL,
    PRIMARY KEY (`id`)
  ) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8;

-- INSERT INTO
--   `projects`
-- VALUES
--   (
--     1,
--     'merege',
--     'all projects in one database',
--     'github',
--     'gitlab',
--     'bitbucket',
--     'javascript',
--     'php',
--     'python',
--     'our first project',
--     '2018-01-01',
--     '2018-03-01'
--   );
  
CREATE TABLE `projects_users` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `user_id` INT NOT NULL,
    `project_id` INT NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`user_id`) REFERENCES users(`id`),
    FOREIGN KEY (`project_id`) REFERENCES projects(`id`)
  ) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8;

-- INSERT INTO
--   `growth`
-- VALUES
--   (
--     1,
--     'july',
--     400,
--     1
--   );