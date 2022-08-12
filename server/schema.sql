/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql -p
 *  to create the database and the tables.*/

/* (Instructions for WSL) Check if MySQL installed and start server by typing:
*   which mysql
*   mysql --version
*   sudo service mysql start
*   sudo service mysql status
*/

/* Confirm database exists:
*  Login to database: mysql -u root -p
*  SHOW DATABASES;
*  USE movies;
*  SHOW TABLES;
*  SELECT * FROM movies;
*  DESCRIBE movies;
*/

DROP DATABASE IF EXISTS movies;
CREATE DATABASE movies;

USE movies;

CREATE TABLE movies (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(50),
  status VARCHAR(20)
);

/* Add sample data to the movies table: */
INSERT INTO movies VALUES (NULL, "Jurassic Park", "To Watch");
INSERT INTO movies VALUES (NULL, "Interstellar", "Watched");
INSERT INTO movies VALUES (NULL, "Top Gun: Maverick", "Watched");
