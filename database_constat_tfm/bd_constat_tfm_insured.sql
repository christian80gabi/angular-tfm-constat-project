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
-- Table structure for table `insured`
--

DROP TABLE IF EXISTS `insured`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `insured` (
  `id_insured` int(10) NOT NULL AUTO_INCREMENT,
  `first_name_insured` varchar(80) DEFAULT NULL,
  `last_name_insured` varchar(80) DEFAULT NULL,
  `email_insured` varchar(80) DEFAULT NULL,
  `password_insured` varchar(80) DEFAULT NULL,
  `address_insured` varchar(80) DEFAULT NULL,
  `tel_insured` varchar(14) DEFAULT NULL,
  `status` int(1) DEFAULT '1',
  `token` varchar(80) DEFAULT NULL,
  PRIMARY KEY (`id_insured`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `insured`
--

LOCK TABLES `insured` WRITE;
/*!40000 ALTER TABLE `insured` DISABLE KEYS */;
INSERT INTO `insured` VALUES (1,'Chris','NANA','chris@chris.com','$2y$10$jL1Er29Hpyc24HJFgv.sUOZFKewEHhiw0B7rkLlj.SfyOZebgFLoi',NULL,NULL,1,NULL),(2,'chris1','chris1','chris1@chris.com','$2y$10$66CC8agaOmHaGGfDhNhbueSaI67kBcinxahRjPVt4Oz3/IC83qfPy',NULL,NULL,1,NULL);
/*!40000 ALTER TABLE `insured` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-06-24 16:04:04
