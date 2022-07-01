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
  --     '2',
  --     'Tiago',
  --     'tiago@mail.com',
  --    '$2a$12$i2tXhhiTdKPVpjZ5Bip7FO5ys8Yv2kKjHbYlTc1g6RMSc0.T5VA6e',
  --     'Munich'
  --   );

CREATE TABLE `projects` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(40) NOT NULL,
    `subject` VARCHAR(80) NOT NULL,
    `branch` VARCHAR(40) NOT NULL,
    `key1` VARCHAR(40) NOT NULL,
    `key2` VARCHAR(40) NOT NULL,
    `key3` VARCHAR(40) NOT NULL,
    `language1` VARCHAR(40) NOT NULL,
    `language2` VARCHAR(40),
    `language3` VARCHAR(40),
    `description` VARCHAR(255) NOT NULL,
    `start_date` DATE NOT NULL,
    `end_date` DATE NOT NULL,
    `trelloLink` VARCHAR(255) NOT NULL,
    `githubLink` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`)
  ) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8;

 INSERT INTO
   `projects`
 VALUES
   (
     1,
    'Merege',
     'all projects in one database',
     'Nice',
     'github',
     'gitlab',
     'bitbucket',
     'javascript',
     'php',
     'python',
     'our first project',
    '2018-01-01',
    '2018-03-01',
    'https://trello.com/',
    'https://github.com/Kelly-co'
   );

 INSERT INTO
   `projects`
 VALUES
   (
     2,
    'Apside',
     'improve co-working',
     'Bordeaux',
     'work',
     'life-style',
     'projects',
     'typescript',
     'mongobd',
     'python',
     'new colaboration project',
     '2022-10-01',
     '2022-12-01',
      'https://apside.com/en/',
      'https://apside.com/en/apside-life/'
   );

   INSERT INTO
   `projects`
 VALUES
   (
     3,
    'Wild Code School',
     'bootcamp project',
     'Aveiro',
     'teaching',
     'life-style',
     'students',
     'javascript',
     'mySQL',
     'CSS',
     'new colaboration project',
     '2015-10-01',
     '2024-12-01',
     'https://www.wildcodeschool.com/pt-PT',
      'https://github.com/WildCodeSchool'
   );


 INSERT INTO
   `projects`
 VALUES
   (
     4,
    'Sport',
     'sport activities',
     'Paris',
     'sport activities',
     'life-style',
     'people',
     'javascript',
     'mongobd',
     'HTML',
     'improve sport activities',
     '2022-05-01',
     '2022-08-01',
      'https://apside.com/en/',
      'https://https://trello.com/'
   );

  
  
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