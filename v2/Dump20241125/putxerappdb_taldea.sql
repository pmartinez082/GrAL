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
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-25 15:13:56
