-- MySQL dump 10.13  Distrib 8.0.15, for Win64 (x86_64)
--
-- Host: localhost    Database: bd_constat_tfm
-- ------------------------------------------------------
-- Server version	8.0.15

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `report`
--

DROP TABLE IF EXISTS `report`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `report` (
  `id_report` int(10) NOT NULL AUTO_INCREMENT,
  `accident_date` date DEFAULT NULL,
  `accident_hour` time DEFAULT NULL,
  `accident_place` varchar(100) DEFAULT NULL,
  `damage` int(1) DEFAULT '0',
  `wounded` int(1) DEFAULT '0',
  `circumstances` varchar(250) DEFAULT NULL,
  `observations` varchar(250) DEFAULT NULL,
  `picture` blob,
  `signature` blob,
  `draw` blob,
  `insured` int(10) DEFAULT NULL,
  `insurance` int(10) DEFAULT NULL,
  `vehicle` int(10) DEFAULT NULL,
  `driver` int(10) DEFAULT NULL,
  `way` int(10) DEFAULT NULL,
  `vehicle_number` int(10) DEFAULT NULL,
  `pdf_report` blob NOT NULL,
  `apparent_damage` varchar(250) NOT NULL,
  PRIMARY KEY (`id_report`),
  KEY `fk_insured4` (`insured`),
  KEY `fk_insurance` (`insurance`),
  KEY `fk_vehicle` (`vehicle`),
  KEY `fk_driver` (`driver`),
  KEY `fk_way` (`way`),
  CONSTRAINT `fk_driver` FOREIGN KEY (`driver`) REFERENCES `driver` (`id_driver`),
  CONSTRAINT `fk_insurance` FOREIGN KEY (`insurance`) REFERENCES `insurance` (`id_insurance`),
  CONSTRAINT `fk_insured4` FOREIGN KEY (`insured`) REFERENCES `insured` (`id_insured`),
  CONSTRAINT `fk_vehicle` FOREIGN KEY (`vehicle`) REFERENCES `vehicle` (`id_vehicle`),
  CONSTRAINT `fk_way` FOREIGN KEY (`way`) REFERENCES `way` (`id_way`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `report`
--

LOCK TABLES `report` WRITE;
/*!40000 ALTER TABLE `report` DISABLE KEYS */;
/*!40000 ALTER TABLE `report` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-06-24 16:04:05
