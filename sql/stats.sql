-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 05, 2025 at 10:23 PM
-- Server version: 10.11.11-MariaDB
-- PHP Version: 8.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `insa`
--

-- --------------------------------------------------------

--
-- Table structure for table `stats`
--

CREATE TABLE `stats` (
  `ID` int(11) NOT NULL,
  `code` varchar(30) NOT NULL,
  `app` tinyint(4) NOT NULL,
  `lang` tinyint(4) NOT NULL,
  `cPushGet` smallint(6) NOT NULL DEFAULT 0,
  `cPushPost` smallint(6) NOT NULL DEFAULT 0,
  `pPullGet` smallint(6) NOT NULL DEFAULT 0,
  `pPullPost` smallint(6) NOT NULL DEFAULT 0,
  `cPushExt` smallint(6) NOT NULL DEFAULT 0,
  `cPushUIMode` smallint(6) NOT NULL DEFAULT 0,
  `pPullExt` smallint(6) NOT NULL DEFAULT 0,
  `pPullUIMode` smallint(6) NOT NULL DEFAULT 0,
  `durationMode` varchar(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `lastPPullAt` datetime NOT NULL DEFAULT current_timestamp(),
  `feedback` tinyint(4) NOT NULL DEFAULT 0,
  `maxSize` int(11) NOT NULL,
  `totalSize` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `stats`
--
ALTER TABLE `stats`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `stats`
--
ALTER TABLE `stats`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
