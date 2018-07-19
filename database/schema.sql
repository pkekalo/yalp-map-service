DROP DATABASE IF EXISTS yalp_map;

CREATE DATABASE yalp_map;

USE yalp_map;

CREATE TABLE map (
	id int NOT NULL AUTO_INCREMENT,
  	name varchar(50) NOT NULL,
  	PRIMARY KEY (id)
);