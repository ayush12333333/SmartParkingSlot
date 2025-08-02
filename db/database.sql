-- MySQL dump 10.13  Distrib 9.1.0, for macos14 (arm64)
--
-- Host: localhost    Database: parkandride
-- ------------------------------------------------------
-- Server version	9.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bookings`
--

DROP TABLE IF EXISTS `bookings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bookings` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `active` bit(1) NOT NULL,
  `check_in_time` datetime(6) DEFAULT NULL,
  `check_out_time` datetime(6) DEFAULT NULL,
  `fare_amount` double DEFAULT NULL,
  `reserved_hours` int DEFAULT NULL,
  `slot_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKi85f6kl18ff7yt2i9g05kli94` (`slot_id`),
  KEY `FKeyog2oic85xg7hsu2je2lx3s6` (`user_id`),
  CONSTRAINT `FKeyog2oic85xg7hsu2je2lx3s6` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `FKi85f6kl18ff7yt2i9g05kli94` FOREIGN KEY (`slot_id`) REFERENCES `parking_slot` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bookings`
--

LOCK TABLES `bookings` WRITE;
/*!40000 ALTER TABLE `bookings` DISABLE KEYS */;
INSERT INTO `bookings` VALUES (7,_binary '\0','2025-07-20 20:18:19.343761','2025-07-20 21:18:19.343761',20,1,6,12),(8,_binary '\0','2025-07-21 11:39:42.044460','2025-07-21 11:41:13.639020',80,2,8,12),(9,_binary '','2025-07-21 11:45:03.971435','2025-07-21 12:45:03.971435',40,1,8,12),(10,_binary '','2025-07-21 11:45:27.083027','2025-07-21 13:45:27.083027',40,2,1,12),(11,_binary '\0','2025-07-30 15:08:15.358019','2025-07-30 16:26:35.533070',80,2,3,18),(12,_binary '\0','2025-07-30 16:30:02.762580','2025-07-30 16:31:00.956249',120,3,11,18),(13,_binary '\0','2025-07-30 16:31:34.157985','2025-07-30 16:33:48.537017',160,4,11,18),(14,_binary '\0','2025-07-30 16:34:51.432217','2025-07-30 19:34:51.432217',60,3,6,18),(15,_binary '\0','2025-08-01 00:34:30.884759','2025-08-01 00:34:48.034559',80,2,3,18),(16,_binary '\0','2025-08-01 17:43:03.400412','2025-08-01 17:45:35.610369',40,2,2,20),(17,_binary '\0','2025-08-01 17:51:51.012385','2025-08-01 17:51:58.601359',80,2,3,20),(18,_binary '\0','2025-08-01 18:32:44.442326','2025-08-01 18:33:12.667465',80,2,4,20),(19,_binary '\0','2025-08-01 18:38:02.145524','2025-08-01 18:50:58.685474',200,5,3,20),(20,_binary '\0','2025-08-01 18:43:27.051837','2025-08-01 18:52:11.174408',80,2,4,20),(21,_binary '\0','2025-08-01 18:56:05.991355','2025-08-01 18:56:20.172855',80,2,4,20),(22,_binary '\0','2025-08-01 19:20:56.831712','2025-08-01 19:21:05.584556',200,5,3,20),(23,_binary '\0','2025-08-01 19:25:13.083549','2025-08-01 19:25:24.895409',160,4,3,20),(24,_binary '\0','2025-08-02 18:59:45.830658','2025-08-02 19:03:25.836788',80,2,12,21),(25,_binary '\0','2025-08-02 21:45:19.221164','2025-08-02 21:45:53.370542',80,2,3,21);
/*!40000 ALTER TABLE `bookings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `parking_slot`
--

DROP TABLE IF EXISTS `parking_slot`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `parking_slot` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `available` bit(1) DEFAULT NULL,
  `booked` bit(1) NOT NULL,
  `booked_at` datetime(6) DEFAULT NULL,
  `fare_amount` int NOT NULL,
  `location` varchar(255) DEFAULT NULL,
  `slot_number` varchar(255) DEFAULT NULL,
  `vehicle_type` enum('ALL','BIKE','CAR') DEFAULT NULL,
  `booked_by_id` bigint DEFAULT NULL,
  `base_fare` double DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKkecouvk2elrhvl4f1f70fa135` (`booked_by_id`),
  CONSTRAINT `FKkecouvk2elrhvl4f1f70fa135` FOREIGN KEY (`booked_by_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `parking_slot`
--

LOCK TABLES `parking_slot` WRITE;
/*!40000 ALTER TABLE `parking_slot` DISABLE KEYS */;
INSERT INTO `parking_slot` VALUES (1,_binary '\0',_binary '','2025-07-21 11:45:27.083027',20,'Delhi','D-001','BIKE',12,20),(2,_binary '',_binary '\0',NULL,20,'Delhi','D-002','BIKE',NULL,20),(3,_binary '',_binary '\0',NULL,40,'Delhi','D-003','CAR',NULL,40),(4,_binary '',_binary '\0',NULL,40,'Delhi','D-004','CAR',NULL,40),(5,_binary '',_binary '\0',NULL,20,'Noida','N-001','BIKE',NULL,20),(6,_binary '',_binary '\0',NULL,20,'Noida','N-002','BIKE',NULL,20),(7,_binary '',_binary '\0',NULL,40,'Noida','N-003','CAR',NULL,40),(8,_binary '\0',_binary '','2025-07-21 11:45:03.971435',40,'Noida','N-004','CAR',12,40),(9,_binary '',_binary '\0',NULL,40,'Delhi','D-005','CAR',NULL,40),(10,_binary '',_binary '\0',NULL,20,'Mumbai','M-001','BIKE',NULL,20),(11,_binary '',_binary '\0',NULL,40,'Patna','P-001','CAR',NULL,40),(12,_binary '',_binary '\0',NULL,40,'Mumbai','M-002','CAR',NULL,40),(13,_binary '',_binary '\0',NULL,40,'Mumbai','M-003','CAR',NULL,40),(14,_binary '',_binary '\0',NULL,20,'goa','G-001','BIKE',NULL,20);
/*!40000 ALTER TABLE `parking_slot` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `role` enum('ADMIN','USER') DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK6dotkott2kjsp8vw4d0m25fb7` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (11,NULL,'admin@gmail.com','Admin Kumar Tiwary','$2a$10$B0PO/WBYmr7iiwpPEoMWOORONl3Ko3Of3uXSpwK/zr5rlzXTnnE2.','7444362738','ADMIN'),(12,'2025-07-20 19:22:17.521330','ayush@gmail.com','Ayush','$2a$10$udcVlhKJNZjV0dVIau4NS.RsUsuY7Y3uWk7yvZCGWFr58/P79z0Xa','7488427478','USER'),(13,'2025-07-26 19:43:11.168230','aman@gamil.com','aman','$2a$10$OTuBWpdMwMaybFpW383OBuaoDHTnLsI6c.o96KllKqRe5McZIYXIG',NULL,NULL),(14,'2025-07-26 19:56:39.877829','amrit@gmail.com','amrit','$2a$10$47YMf22qZSgvv5yaubX2Lu7zv9y8/Nz8rFCfOfkb4MrvAXnByJ432','7488427478',NULL),(15,'2025-07-26 19:59:23.903955','amrit1@gmail.com','amrit1','$2a$10$HhrcENX7ozq.EOGSpQuqf.PPpjCee7S9CNClWP2IEnLw5HjGf13Xy','7488427478',NULL),(16,'2025-07-26 20:00:19.425381','amrit21@gmail.com','amrit12','$2a$10$d7BxUaZPef0yPnPwmoBX0ufniCtDWil8iCwkCYn7dnZaAH5N51lD2','7488427478',NULL),(17,'2025-07-26 20:07:20.280766','arit21@gmail.com','amrit123','$2a$10$UTqypQiO2ICisLGjZOmI6eDDRVT/zuaaX1dipb0elvhVEjvPRQVSS','7488427478',NULL),(18,'2025-07-26 20:20:59.964030','ayushi@gmail.com','ayushi','$2a$10$miMC.DxCRJhg0l6ViXDnk..ko5oxinGffQKTDfFxFneKl1dLtDEhe','7488427478','USER'),(19,'2025-08-01 17:35:30.577273','ak@gmail','ankur','$2a$10$2xcixEh38hv0zGPerGk8t.b/AxLEGFUiw5xwgdVxnSt3pNJQ5nyTi','8864849292','USER'),(20,'2025-08-01 17:42:11.361757','at@gmail','at','$2a$10$5nWvxzPy62VGkS1IPK7ni.9y5kBKdiYzJDQenogNkuaUCwdqhsAZe','758493939','USER'),(21,'2025-08-01 17:56:25.797580','piyush@gmail.com','piyush Gupta','$2a$10$U/0xMMPzTl2.7wCkK7rg2uhpxMIiNWd1cOun7Iqa56bj3Wq2sgG8G','98929283','USER');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-08-02 22:10:24
