CREATE DATABASE Battleship;
USE Battleship;

CREATE TABLE `chirps` (
  `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
  `player1_name` VARCHAR( 255) NOT NULL,
  `player2_name` VARCHAR( 255 ) NOT NULL,
  `created_at` DATETIME NOT NULL,

  PRIMARY KEY ( `id` ) 
);