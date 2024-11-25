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
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-25 15:13:55
