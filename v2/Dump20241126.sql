-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: putxerappdb
-- ------------------------------------------------------
-- Server version	8.0.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ebaluazioa`
--

DROP TABLE IF EXISTS `ebaluazioa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ebaluazioa` (
  `idEbaluazioa` int NOT NULL AUTO_INCREMENT,
  `idEpaimahaikidea` int NOT NULL,
  `idEzaugarria` int NOT NULL,
  `idTaldea` int NOT NULL,
  `puntuak` smallint NOT NULL,
  `noiz` datetime NOT NULL,
  PRIMARY KEY (`idEbaluazioa`),
  KEY `fk_Ebaluazioa_Epaimahaikidea1_idx` (`idEpaimahaikidea`),
  KEY `fk_Ebaluazioa_Ezaugarria1_idx` (`idEzaugarria`),
  KEY `fk_Ebaluazioa_Taldea1_idx` (`idTaldea`),
  CONSTRAINT `fk_Ebaluazioa_Epaimahaikidea1` FOREIGN KEY (`idEpaimahaikidea`) REFERENCES `epaimahaikidea` (`idEpaimahaikidea`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_Ebaluazioa_Ezaugarria1` FOREIGN KEY (`idEzaugarria`) REFERENCES `ezaugarria` (`idEzaugarria`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_Ebaluazioa_Taldea1` FOREIGN KEY (`idTaldea`) REFERENCES `taldea` (`idTaldea`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=97 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ebaluazioa`
--

LOCK TABLES `ebaluazioa` WRITE;
/*!40000 ALTER TABLE `ebaluazioa` DISABLE KEYS */;
INSERT INTO `ebaluazioa` VALUES (3,3,1,1,6,'2024-11-14 17:25:48'),(4,4,1,6,4,'2024-11-14 00:00:00'),(20,4,1,2,5,'2024-11-15 16:37:41'),(21,4,1,1,0,'2024-11-19 22:58:00'),(22,4,2,1,1,'2024-11-19 22:58:00'),(23,4,10,1,2,'2024-11-19 22:58:00'),(24,4,11,1,3,'2024-11-19 22:58:01'),(25,4,1,3,1,'2024-11-19 22:59:16'),(26,4,2,3,2,'2024-11-19 22:59:16'),(27,4,10,3,3,'2024-11-19 22:59:16'),(28,4,11,3,4,'2024-11-19 22:59:16'),(29,4,1,3,1,'2024-11-19 22:59:52'),(30,4,2,3,2,'2024-11-19 22:59:52'),(31,4,10,3,3,'2024-11-19 22:59:52'),(32,4,11,3,4,'2024-11-19 22:59:52'),(33,4,1,8,1,'2024-11-19 23:02:55'),(34,4,2,8,3,'2024-11-19 23:02:55'),(35,4,10,8,4,'2024-11-19 23:02:55'),(36,4,11,8,5,'2024-11-19 23:02:55'),(37,4,1,8,1,'2024-11-19 23:03:15'),(38,4,2,8,3,'2024-11-19 23:03:15'),(39,4,10,8,4,'2024-11-19 23:03:15'),(40,4,11,8,5,'2024-11-19 23:03:15'),(41,4,1,8,1,'2024-11-19 23:03:27'),(42,4,2,8,3,'2024-11-19 23:03:27'),(43,4,10,8,4,'2024-11-19 23:03:27'),(44,4,11,8,5,'2024-11-19 23:03:27'),(45,4,1,9,0,'2024-11-19 23:04:48'),(46,4,2,9,1,'2024-11-19 23:04:48'),(47,4,10,9,3,'2024-11-19 23:04:48'),(48,4,11,9,2,'2024-11-19 23:04:49'),(49,4,1,9,0,'2024-11-19 23:04:51'),(50,4,1,4,1,'2024-11-19 23:27:48'),(51,4,2,4,2,'2024-11-19 23:27:48'),(52,4,10,4,3,'2024-11-19 23:27:48'),(53,4,11,4,4,'2024-11-19 23:27:48'),(54,4,1,4,1,'2024-11-19 23:27:57'),(55,4,1,13,7,'2024-11-19 23:30:06'),(56,4,2,13,8,'2024-11-19 23:30:06'),(57,4,10,13,4,'2024-11-19 23:30:06'),(58,4,11,13,18,'2024-11-19 23:30:06'),(59,4,1,11,7,'2024-11-19 23:31:52'),(60,4,2,11,8,'2024-11-19 23:31:52'),(61,4,10,11,3,'2024-11-19 23:31:53'),(62,4,11,11,3,'2024-11-19 23:31:53'),(63,4,1,5,1,'2024-11-20 00:31:58'),(64,4,2,5,2,'2024-11-20 00:31:58'),(65,4,10,5,3,'2024-11-20 00:31:58'),(66,4,11,5,4,'2024-11-20 00:31:58'),(67,4,1,10,2,'2024-11-20 00:32:12'),(68,4,2,10,4,'2024-11-20 00:32:12'),(69,4,10,10,5,'2024-11-20 00:32:12'),(70,4,11,10,6,'2024-11-20 00:32:12'),(71,4,1,12,1,'2024-11-20 00:32:22'),(72,4,2,12,2,'2024-11-20 00:32:22'),(73,4,10,12,3,'2024-11-20 00:32:22'),(74,4,11,12,4,'2024-11-20 00:32:22'),(75,4,1,12,1,'2024-11-20 00:33:07'),(76,4,2,12,3,'2024-11-20 00:33:08'),(77,4,10,12,3,'2024-11-20 00:33:08'),(78,4,11,12,3,'2024-11-20 00:33:08'),(79,4,1,12,1,'2024-11-20 00:33:08'),(80,5,1,1,2,'2024-11-20 11:18:28'),(81,5,2,1,3,'2024-11-20 11:18:28'),(82,5,10,1,4,'2024-11-20 11:18:28'),(83,5,11,1,5,'2024-11-20 11:18:28'),(84,5,1,2,0,'2024-11-20 11:21:29'),(85,5,2,2,1,'2024-11-20 11:21:29'),(86,5,10,2,3,'2024-11-20 11:21:29'),(87,5,11,2,4,'2024-11-20 11:21:29'),(88,5,1,3,4,'2024-11-20 11:22:05'),(89,5,2,3,5,'2024-11-20 11:22:05'),(90,5,10,3,6,'2024-11-20 11:22:05'),(91,5,11,3,7,'2024-11-20 11:22:05'),(92,5,1,10,1,'2024-11-20 12:18:26'),(93,5,2,10,2,'2024-11-20 12:18:27'),(94,5,10,10,3,'2024-11-20 12:18:27'),(95,5,11,10,4,'2024-11-20 12:18:28'),(96,6,13,3,8,'2024-11-20 12:30:00');
/*!40000 ALTER TABLE `ebaluazioa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `epaimahaikidea`
--

DROP TABLE IF EXISTS `epaimahaikidea`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `epaimahaikidea` (
  `idEpaimahaikidea` int NOT NULL AUTO_INCREMENT,
  `username` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `idFasea` int NOT NULL,
  PRIMARY KEY (`idEpaimahaikidea`),
  KEY `fk_Epaimahaikidea_User1_idx` (`username`),
  KEY `fk_Epaimahaikidea_Faseak1_idx` (`idFasea`),
  CONSTRAINT `fk_Epaimahaikidea_Fasea1` FOREIGN KEY (`idFasea`) REFERENCES `fasea` (`idFasea`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_Epaimahaikidea_User1` FOREIGN KEY (`username`) REFERENCES `user` (`username`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `epaimahaikidea`
--

LOCK TABLES `epaimahaikidea` WRITE;
/*!40000 ALTER TABLE `epaimahaikidea` DISABLE KEYS */;
INSERT INTO `epaimahaikidea` VALUES (3,'epaile1',2),(4,'epaile2',3),(5,'epaile3',3),(6,'epaile1',5),(13,'pipi',2),(14,'pipi',1);
/*!40000 ALTER TABLE `epaimahaikidea` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ezaugarria`
--

DROP TABLE IF EXISTS `ezaugarria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ezaugarria` (
  `idEzaugarria` int NOT NULL AUTO_INCREMENT,
  `idFasea` int NOT NULL,
  `izena` varchar(45) NOT NULL,
  `puntuakMin` smallint NOT NULL,
  `puntuakMax` smallint NOT NULL,
  PRIMARY KEY (`idEzaugarria`),
  KEY `fk_Ezagaugarria_Fasea1_idx` (`idFasea`),
  CONSTRAINT `fk_Ezagaugarria_Fasea1` FOREIGN KEY (`idFasea`) REFERENCES `fasea` (`idFasea`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ezaugarria`
--

LOCK TABLES `ezaugarria` WRITE;
/*!40000 ALTER TABLE `ezaugarria` DISABLE KEYS */;
INSERT INTO `ezaugarria` VALUES (1,1,'usaina',0,10),(2,1,'zaporea',0,10),(10,1,'kolorea',0,5),(11,1,'teknika',0,20),(12,3,'usaina',0,10),(13,3,'originaltasuna',0,5);
/*!40000 ALTER TABLE `ezaugarria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fasea`
--

DROP TABLE IF EXISTS `fasea`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fasea` (
  `idFasea` int NOT NULL AUTO_INCREMENT,
  `idTxapelketa` int NOT NULL,
  `kodea` varchar(45) NOT NULL,
  `izena` varchar(45) NOT NULL,
  `egoera` smallint NOT NULL,
  `hasiera` datetime DEFAULT NULL,
  `amaiera` datetime DEFAULT NULL,
  `irizpidea` varchar(45) NOT NULL,
  PRIMARY KEY (`idFasea`),
  KEY `fk_Faseak_Txapelketa_idx` (`idTxapelketa`),
  CONSTRAINT `fk_Faseak_Txapelketa` FOREIGN KEY (`idTxapelketa`) REFERENCES `txapelketa` (`idTxapelketa`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fasea`
--

LOCK TABLES `fasea` WRITE;
/*!40000 ALTER TABLE `fasea` DISABLE KEYS */;
INSERT INTO `fasea` VALUES (1,2,'kode berria','fasea1',1,'2024-11-20 15:30:00','2024-11-20 16:00:00','% 60'),(2,1,'kodea2','fasea2',2,'2024-11-11 12:30:00','2024-11-11 12:50:00','% 20'),(3,1,'kodea3','fasea3',1,'2024-11-11 12:55:00','2024-11-11 13:15:00','% 30'),(5,1,'kodea5','fasea5',0,'2024-11-11 14:05:00','2024-11-11 14:35:00','1'),(6,1,'froga','faseaPost',1,NULL,NULL,'87'),(7,2,'kodeFroga','faseaFroga',0,'2024-12-25 15:30:00','2024-12-25 16:00:00','% 20');
/*!40000 ALTER TABLE `fasea` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `taldea`
--

DROP TABLE IF EXISTS `taldea`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `taldea` (
  `idTaldea` int NOT NULL AUTO_INCREMENT,
  `izena` varchar(45) NOT NULL,
  `email` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `telefonoa` int DEFAULT NULL,
  `puntuakGuztira` int DEFAULT NULL,
  `egoera` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`idTaldea`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `taldea`
--

LOCK TABLES `taldea` WRITE;
/*!40000 ALTER TABLE `taldea` DISABLE KEYS */;
INSERT INTO `taldea` VALUES (1,'taldea1','taldea1@taldea.com',123456789,NULL,0),(2,'taldea2','taldea2@taldea.com',987654321,NULL,0),(3,'taldea3','taldea3@taldea.com',98765432,NULL,0),(4,'taldea4','taldea4@taldea.com',109876543,NULL,0),(5,'taldea5','taldea5@taldea.com',110987654,NULL,0),(6,'taldea6','taldea6@taldea.com',121109876,NULL,0),(8,'taldea8','taldea8@taldea.com',141312111,NULL,0),(9,'taldea9','taldea9@taldea.com',151413121,NULL,0),(10,'taldea10','taldea10@taldea.com',161514131,NULL,0),(11,'taldeaFroga','froga@taldea.eus',5674323,0,0),(12,'taldeaFroga2','froga2@taldea.eus',NULL,0,0),(13,'taldeaAdd','taldeaAdd@taldea.com',456123987,0,0);
/*!40000 ALTER TABLE `taldea` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `txapelketa`
--

DROP TABLE IF EXISTS `txapelketa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `txapelketa` (
  `idTxapelketa` int NOT NULL AUTO_INCREMENT,
  `izena` varchar(45) NOT NULL,
  `dataOrdua` datetime NOT NULL,
  `lekua` varchar(256) NOT NULL,
  `egoera` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`idTxapelketa`)
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `txapelketa`
--

LOCK TABLES `txapelketa` WRITE;
/*!40000 ALTER TABLE `txapelketa` DISABLE KEYS */;
INSERT INTO `txapelketa` VALUES (1,'txapelketa1','2024-11-11 12:00:00','Balmaseda',1),(2,'Bilboko putxerak','2025-01-01 14:00:00','Bilbo',0),(4,'txap','2025-02-22 00:00:00','bilbo',0),(58,'tyre','0111-11-11 00:00:00','df',2);
/*!40000 ALTER TABLE `txapelketa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `username` varchar(100) NOT NULL,
  `password` varchar(45) NOT NULL,
  `role` enum('admin','referee') NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`username`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('admin1','123','admin',NULL),('epaile1','456','referee',NULL),('epaile1234','1234','referee','epaile@aaaa.com'),('epaile2','789','referee',NULL),('epaile3','abc','referee',NULL),('epaile4','def','referee',NULL),('jajaja','123','referee','ajajaja@ajaja.com'),('paula123','123','admin',NULL),('pepita','1234','referee','pepita@pepita.com'),('pipi','pipi','referee','pipi@pipi.eus'),('popo','popo','referee','popo@popo.com'),('txomin','txomin','referee','txomin@txomin.com'),('userPost','froga','admin',NULL),('userPost3','froga3','referee',NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-26  0:31:38
