DROP DATABASE IF EXISTS `merege`;
create database `merege`;
use `merege`;
DROP TABLE IF EXISTS `projects`;
DROP TABLE IF EXISTS `users`;
DROP TABLE IF EXISTS `projects_users`;

CREATE TABLE `users` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(80) NOT NULL,
    `email` VARCHAR(80) UNIQUE NOT NULL,
    `hashedPassword` varchar(300) NOT NULL,
    `branch` VARCHAR(80) NOT NULL,
    PRIMARY KEY (`id`)
  ) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8;

  INSERT INTO
    `users`
  VALUES
    (
      '1',
      'Juan',
      'juan@mail.com',
     '$2a$12$60RmVTEvhdaSTkP5U1trpusNoTGEyjeihC.KHgCx08Dem/9gbwcfK',
      'Lyon'
    ),
    (
      '2',
      'Tiago',
      'tiago@mail.com',
     '$2a$12$i2tXhhiTdKPVpjZ5Bip7FO5ys8Yv2kKjHbYlTc1g6RMSc0.T5VA6e',
      'Munich'
    ),
    (
      '3',
      'João',
      'joao@mail.com',
      '$2a$12$R75rlRXJd2fwlN4lW4deFuVyMMCs5hKA6CvN7ihkWjJKIdnljQyzK',
      'Nice'
      ),
      (
      '4',
      'Maria',
      'maria@mail.com',
      '$2a$12$7PttesrVincY0khc.KPEYettkg9FiQW5DqnCFWUj6SJ9YSv4PQlKC',
      'Paris'
      ),
      (
      '5',
      'Patricia',
      'patricia@mail.com',
      '$2a$12$ME9nzaQ5yLV6ymrh0mRvl.0MeBs7vkXwlq3w6dM3ziEuSpFmNzXYu',
      'London'
      ),
      (
      '6',
      'Melly',
      'melly@mail.com',
      '$2a$12$gKzsziGSIHDHBug95KLK1OWsDgXA3JZ2EVKVAiLy8/IkVsK.g4cpm',
      'Paris'
      ),
      (
      '7',
      'Lourenço',
      'lourenco@mail.com',
      '$2a$12$6dH9BOHrjjbBKFv.ByWy2eY3w1FWwtY2mf0AGd/NjJzijk70GCP.a',
      'Paris'
      ),
      (
      '8',
      'Francisco',
      'chico@mail.com',
      '$2a$12$ff4YDknKvWFNeCalpX32weDdv0E50JPKckHQiuo8sRn7b3Bgqvi7K',
      'Paris'
      ),
      (
      '9',
      'Nuno',
      'nuno@mail.com',
      '$2a$12$t8Yl0TP8InPHKTAIddXkBOWKgggOtas5q8k/XN6hG9AcomK0I0TO.',
      'Paris'
      ),
      (
      '10',
      'Alex',
      'alex@mail.com',
      '$2a$12$eLvc/qKLUn0qTiqwz4x0tef33P4aJdl2.YslGV3SORtTW.xvsZxk.',
      'Lyon'
      );


CREATE TABLE `projects` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `projectName` VARCHAR(40) NOT NULL,
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