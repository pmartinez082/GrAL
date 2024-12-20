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
) ENGINE=InnoDB AUTO_INCREMENT=185 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ebaluazioa`
--

LOCK TABLES `ebaluazioa` WRITE;
/*!40000 ALTER TABLE `ebaluazioa` DISABLE KEYS */;
INSERT INTO `ebaluazioa` VALUES (123,21,21,2,6,'2024-12-03 22:19:38'),(124,21,22,2,6,'2024-12-03 22:19:38'),(125,21,21,3,5,'2024-12-03 22:19:41'),(126,21,22,3,5,'2024-12-03 22:19:41'),(127,21,21,4,2,'2024-12-03 22:19:49'),(128,21,22,4,3,'2024-12-03 22:19:49'),(129,21,21,5,7,'2024-12-03 22:19:54'),(130,21,22,5,6,'2024-12-03 22:19:54'),(131,21,21,6,0,'2024-12-03 22:20:27'),(132,21,22,6,10,'2024-12-03 22:20:27'),(133,21,21,8,2,'2024-12-03 22:20:34'),(134,21,22,8,3,'2024-12-03 22:20:34'),(135,21,21,9,4,'2024-12-03 22:20:40'),(136,21,22,9,5,'2024-12-03 22:20:40'),(137,21,21,10,6,'2024-12-03 22:20:47'),(138,21,22,10,7,'2024-12-03 22:20:48'),(139,21,21,11,8,'2024-12-03 22:20:54'),(140,21,22,11,5,'2024-12-03 22:20:54'),(141,21,21,12,10,'2024-12-03 22:21:01'),(142,21,22,12,5,'2024-12-03 22:21:02'),(143,21,21,13,2,'2024-12-03 22:21:09'),(144,21,22,13,3,'2024-12-03 22:21:09'),(147,22,21,2,3,'2024-12-03 22:22:20'),(148,22,22,2,5,'2024-12-03 22:22:20'),(149,22,21,3,5,'2024-12-03 22:22:27'),(150,22,22,3,6,'2024-12-03 22:22:27'),(151,22,21,4,6,'2024-12-03 22:22:36'),(152,22,22,4,8,'2024-12-03 22:22:36'),(153,22,21,5,6,'2024-12-03 22:22:43'),(154,22,22,5,7,'2024-12-03 22:22:43'),(155,22,21,6,5,'2024-12-03 22:22:50'),(156,22,22,6,7,'2024-12-03 22:22:51'),(157,22,21,8,10,'2024-12-03 22:22:57'),(158,22,22,8,5,'2024-12-03 22:22:57'),(159,22,21,9,5,'2024-12-03 22:23:05'),(160,22,22,9,7,'2024-12-03 22:23:05'),(161,22,21,10,5,'2024-12-03 22:23:11'),(162,22,22,10,5,'2024-12-03 22:23:11'),(163,22,21,11,9,'2024-12-03 22:23:17'),(164,22,22,11,9,'2024-12-03 22:23:17'),(165,22,21,12,5,'2024-12-03 22:23:24'),(166,22,22,12,6,'2024-12-03 22:23:24'),(167,22,21,13,7,'2024-12-03 22:23:31'),(168,22,22,13,8,'2024-12-03 22:23:31'),(172,23,23,2,8,'2024-12-11 12:18:14'),(173,23,24,2,9,'2024-12-11 12:18:14'),(174,23,25,2,6,'2024-12-11 12:18:14'),(175,23,23,3,1,'2024-12-14 16:35:53'),(176,23,24,3,3,'2024-12-14 16:35:53'),(177,23,23,16,1,'2024-12-14 16:38:20'),(178,23,24,16,2,'2024-12-14 16:38:20'),(179,23,25,16,3,'2024-12-14 16:38:20'),(181,23,23,19,1,'2024-12-14 16:39:41'),(182,23,23,6,2,'2024-12-14 16:40:20'),(183,23,23,5,7,'2024-12-14 16:46:35'),(184,23,23,15,7,'2024-12-14 16:53:13');
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
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `epaimahaikidea`
--

LOCK TABLES `epaimahaikidea` WRITE;
/*!40000 ALTER TABLE `epaimahaikidea` DISABLE KEYS */;
INSERT INTO `epaimahaikidea` VALUES (21,'epaile1',26),(22,'epaile1234',26),(23,'epaile1',27),(24,'epaile2',27),(25,'txomin',27),(26,'pepita',28),(27,'pipi',28),(28,'popo',28),(29,'txomin',28),(30,'userPost3',28);
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
  `ponderazioa` float DEFAULT '0.5',
  PRIMARY KEY (`idEzaugarria`),
  KEY `fk_Ezagaugarria_Fasea1_idx` (`idFasea`),
  CONSTRAINT `fk_Ezagaugarria_Fasea1` FOREIGN KEY (`idFasea`) REFERENCES `fasea` (`idFasea`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ezaugarria`
--

LOCK TABLES `ezaugarria` WRITE;
/*!40000 ALTER TABLE `ezaugarria` DISABLE KEYS */;
INSERT INTO `ezaugarria` VALUES (21,26,'kolorea',0,10,0.5),(22,26,'usaina',0,10,0.5),(23,27,'teknika',0,10,0.25),(24,27,'zaporea',0,10,0.5),(25,27,'produktua',0,10,0.25),(26,28,'orokorra',0,10,1);
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
  `izena` varchar(45) NOT NULL,
  `egoera` smallint NOT NULL,
  `hasiera` datetime DEFAULT NULL,
  `amaiera` datetime DEFAULT NULL,
  `irizpidea` varchar(45) NOT NULL,
  PRIMARY KEY (`idFasea`),
  KEY `fk_Faseak_Txapelketa_idx` (`idTxapelketa`),
  CONSTRAINT `fk_Faseak_Txapelketa` FOREIGN KEY (`idTxapelketa`) REFERENCES `txapelketa` (`idTxapelketa`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fasea`
--

LOCK TABLES `fasea` WRITE;
/*!40000 ALTER TABLE `fasea` DISABLE KEYS */;
INSERT INTO `fasea` VALUES (26,74,'fasea1',2,'2024-12-12 12:30:00','2024-12-12 14:00:00','% 75'),(27,74,'fasea2',2,'2024-12-12 14:30:00','2024-12-15 00:00:00','% 60'),(28,74,'Fasea3',1,'2024-12-10 00:00:00','2024-12-12 16:00:00','5');
/*!40000 ALTER TABLE `fasea` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = cp850 */ ;
/*!50003 SET character_set_results = cp850 */ ;
/*!50003 SET collation_connection  = cp850_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `after_fase_update_kalkulatu_puntuak` AFTER UPDATE ON `fasea` FOR EACH ROW BEGIN
    IF NEW.egoera = 2 THEN
        UPDATE taldea t
        JOIN (
            SELECT 
                eb.idTaldea,
                SUM(eb.puntuak * ez.ponderazioa) AS totalPuntuak
            FROM ebaluazioa eb
            JOIN ezaugarria ez ON eb.idEzaugarria = ez.idEzaugarria
            JOIN epaimahaikidea ep ON ep.idEpaimahaikidea = eb.idEpaimahaikidea
            WHERE ep.idFasea = NEW.idFasea  
            GROUP BY eb.idTaldea
        ) AS kalkulu ON t.idTaldea = kalkulu.idTaldea
        SET t.puntuakGuztira = IFNULL(t.puntuakGuztira, 0) + kalkulu.totalPuntuak;
    END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = cp850 */ ;
/*!50003 SET character_set_results = cp850 */ ;
/*!50003 SET collation_connection  = cp850_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `after_fase_update_egoera_no_percentage` AFTER UPDATE ON `fasea` FOR EACH ROW BEGIN
    DECLARE num_taldeak INT;
    DECLARE id_epaimahaikidea INT;

    IF NEW.egoera = 2 AND LOCATE('%', NEW.irizpidea) = 0 THEN
        
        SET id_epaimahaikidea = (SELECT idEpaimahaikidea FROM epaimahaikidea WHERE idFasea = NEW.idFasea LIMIT 1);

        SET num_taldeak = CAST(NEW.irizpidea AS UNSIGNED);

        UPDATE taldea t
        JOIN (
            SELECT idTaldea
            FROM (
                SELECT idTaldea
                FROM ebaluazioa
                WHERE idEpaimahaikidea = id_epaimahaikidea
                GROUP BY idTaldea
                ORDER BY SUM(puntuak) DESC
                LIMIT num_taldeak
            ) AS top_taldeak
        ) AS kalkulu ON t.idTaldea = kalkulu.idTaldea
        SET t.egoera = 1;

        UPDATE taldea
        SET egoera = 0
        WHERE idTaldea NOT IN (
            SELECT idTaldea
            FROM (
                SELECT idTaldea
                FROM ebaluazioa
                WHERE idEpaimahaikidea = id_epaimahaikidea
                GROUP BY idTaldea
                ORDER BY SUM(puntuak) DESC
                LIMIT num_taldeak
            ) AS top_taldeak
        );
    END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = cp850 */ ;
/*!50003 SET character_set_results = cp850 */ ;
/*!50003 SET collation_connection  = cp850_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `after_fase_update_egoera_percentage` AFTER UPDATE ON `fasea` FOR EACH ROW BEGIN
    DECLARE ehunekoa DECIMAL(5,2);
    DECLARE total_taldeak INT;
    DECLARE num_top_taldeak INT;
    DECLARE id_epaimahaikidea INT;

    IF NEW.egoera = 2 AND LOCATE('%', NEW.irizpidea) > 0 THEN
        
        SET id_epaimahaikidea = (SELECT idEpaimahaikidea FROM epaimahaikidea WHERE idFasea = NEW.idFasea LIMIT 1);

        SET ehunekoa = CAST(REPLACE(NEW.irizpidea, '%', '') AS DECIMAL(5,2)) / 100;

        SET total_taldeak = (
            SELECT COUNT(DISTINCT idTaldea)
            FROM ebaluazioa
            WHERE idEpaimahaikidea = id_epaimahaikidea
        );

        SET num_top_taldeak = FLOOR(total_taldeak * ehunekoa);

        UPDATE taldea t
        JOIN (
            SELECT idTaldea
            FROM (
                SELECT idTaldea
                FROM ebaluazioa
                WHERE idEpaimahaikidea = id_epaimahaikidea
                GROUP BY idTaldea
                ORDER BY SUM(puntuak) DESC
                LIMIT num_top_taldeak
            ) AS top_taldeak
        ) AS kalkulu ON t.idTaldea = kalkulu.idTaldea
        SET t.egoera = 1;

        UPDATE taldea
        SET egoera = 2
        WHERE idTaldea NOT IN (
            SELECT idTaldea
            FROM (
                SELECT idTaldea
                FROM ebaluazioa
                WHERE idEpaimahaikidea = id_epaimahaikidea
                GROUP BY idTaldea
                ORDER BY SUM(puntuak) DESC
                LIMIT num_top_taldeak
            ) AS top_taldeak
        );
    END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = cp850 */ ;
/*!50003 SET character_set_results = cp850 */ ;
/*!50003 SET collation_connection  = cp850_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `after_fase_update_egoera` AFTER UPDATE ON `fasea` FOR EACH ROW BEGIN
    IF NEW.egoera = 1 THEN
        UPDATE taldea t
        SET t.egoera = CASE
            WHEN t.egoera = 1 THEN 0 
            ELSE t.egoera 
        END
        WHERE t.idTaldea IN (
            SELECT DISTINCT e.idTaldea
            FROM ebaluazioa e
            JOIN epaimahaikidea ep ON e.idEpaimahaikidea = ep.idEpaimahaikidea
            JOIN fasea f ON ep.idFasea = f.idFasea
            JOIN txapelketa tx ON f.idTxapelketa = tx.idTxapelketa
            WHERE tx.egoera = 1
        );
    END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

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
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `taldea`
--

LOCK TABLES `taldea` WRITE;
/*!40000 ALTER TABLE `taldea` DISABLE KEYS */;
INSERT INTO `taldea` VALUES (2,'taldea2','taldea2@taldea.com',987654321,38,1),(3,'taldea3','taldea3@taldea.com',98765432,32,2),(4,'taldea4','taldea4@taldea.com',109876543,30,2),(5,'taldea5','taldea5@taldea.com',110987654,41,1),(6,'taldea6','taldea6@taldea.com',121109876,34,2),(8,'taldea8','taldea8@taldea.com',141312111,30,2),(9,'taldea9','taldea9@taldea.com',151413121,30,2),(10,'taldea10','taldea10@taldea.com',161514131,36,2),(11,'taldeaFroga','froga@taldea.eus',5674323,48,2),(12,'taldeaFroga2','froga2@taldea.eus',NULL,39,2),(13,'taldeaAdd','taldeaAdd@taldea.com',456123987,30,2),(15,'taldea12345','1234@taldea.taldea',234121334,2,1),(16,'sdfhcgfjhbk','fghjnkml,@jkm,g.oc',78887878,2,1),(19,'aaaaa','aa@aa.aa',NULL,0,2);
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
) ENGINE=InnoDB AUTO_INCREMENT=127 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `txapelketa`
--

LOCK TABLES `txapelketa` WRITE;
/*!40000 ALTER TABLE `txapelketa` DISABLE KEYS */;
INSERT INTO `txapelketa` VALUES (74,'txapelketa1','2024-12-03 00:00:00','Bilbo',1);
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
INSERT INTO `user` VALUES ('aaa','aaa','referee','aaa@aaa.aaa'),('admin1','123','admin',NULL),('epaile1','456','referee',NULL),('epaile1234','1234','referee','epaile@aaaa.com'),('epaile2','789','referee',NULL),('epaile3','abc','referee',NULL),('epaile4','def','referee',NULL),('jajaja','123','referee','ajajaja@ajaja.com'),('paula123','123','admin',NULL),('pepita','1234','referee','pepita@pepita.com'),('peter','peter','admin','peter@peter.com'),('pipi','pipi','referee','pipi@pipi.eus'),('popo','popo','referee','popo@popo.com'),('txomin','txomin','referee','txomin@txomin.com'),('userPost','froga','admin',NULL),('userPost3','froga3','referee',NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'putxerappdb'
--

--
-- Dumping routines for database 'putxerappdb'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-20 12:13:51
