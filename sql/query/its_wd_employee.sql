-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Creato il: Mag 28, 2024 alle 07:08
-- Versione del server: 11.3.2-MariaDB-1:11.3.2+maria~ubu2204
-- Versione PHP: 8.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `its_wd_employee`
--
create database its_wd_employee;
use its_wd_employee;
-- --------------------------------------------------------

--
-- Struttura della tabella `branch`
--

CREATE TABLE `branch` (
  `id` varchar(4) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `branch`
--

INSERT INTO `branch` (`id`, `name`) VALUES
('BE04', 'Bruxell Office'),
('NO01', 'Oslo Office'),
('IT06', 'Trieste Office'),
('IT07', 'Turin Office');

-- --------------------------------------------------------

--
-- Struttura della tabella `employee`
--

CREATE TABLE `employee` (
  `id` int(11) NOT NULL,
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `branch_id` varchar(4) NOT NULL,
  `role_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `employee`
--

INSERT INTO `employee` (`id`, `firstname`, `lastname`, `branch_id`, `role_id`) VALUES
(1, 'Gianni', 'Mandarino', 'IT06', 6),
(2, 'Giulia', 'Ciliegia', 'IT06', 6),
(3, 'Sara', 'Nespola', 'IT06', 1),
(4, 'Ermanno', 'Anguria', 'IT06', 3),
(5, 'Eusebio', 'Melone', 'IT06', 4),
(6, 'Francesca', 'Pesca', 'IT06', 2),
(7, 'Piero', 'Prugna', 'IT06', 5),
(8, 'Fulvio', 'Zucca', 'IT07', 1),
(9, 'Franco', 'Asparago', 'IT07', 2),
(10, 'Lucilla', 'Radicchio', 'IT07', 6),
(11, 'Bernardo', 'Indivia', 'IT07', 6),
(12, 'Sandra', 'Salvia', 'IT07', 6),
(13, 'Georges', 'Simenon', 'BE04', 2),
(14, 'Françoise', 'Mallet-Joris', 'BE04', 5),
(15, 'Jan', 'Van Beers', 'BE04', 3),
(16, 'Etienne', 'Vermeersch', 'BE04', 3),
(17, 'Guttorm', 'Fløistad', 'NO01', 2),
(18, 'Ludvig', 'Holberg', 'NO01', 1),
(19, 'Hans', 'Jæger', 'NO01', 1),
(20, 'Linda', 'Kvam', 'NO01', 6);

-- --------------------------------------------------------

--
-- Struttura della tabella `employee_projects`
--

CREATE TABLE `employee_projects` (
  `employee_id` int(11) NOT NULL,
  `project_id` varchar(6) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `employee_projects`
--

INSERT INTO `employee_projects` (`employee_id`, `project_id`, `start_date`, `end_date`) VALUES
(1, 'PRJ027', '2023-01-01', NULL),
(2, 'PRJ027', '2023-01-01', NULL),
(3, 'PRJ027', '2023-01-01', NULL),
(4, 'PRJ027', '2023-01-01', '2024-04-30'),
(4, 'PRJ029', '2024-05-01', NULL),
(5, 'PRJ027', '2023-01-01', NULL),
(6, 'PRJ027', '2023-01-01', NULL),
(7, 'PRJ027', '2024-01-01', NULL),
(8, 'PRJ029', '2023-01-01', NULL),
(9, 'PRJ029', '2023-01-01', NULL),
(10, 'PRJ029', '2023-01-01', NULL),
(11, 'PRJ029', '2023-01-01', NULL),
(12, 'PRJ029', '2024-01-01', NULL),
(13, 'PRJ003', '2024-01-01', NULL),
(14, 'PRJ003', '2024-01-01', NULL),
(15, 'PRJ003', '2024-02-01', NULL),
(16, 'PRJ003', '2024-03-01', NULL),
(17, 'PRJ854', '2023-07-01', NULL),
(18, 'PRJ854', '2023-01-01', NULL),
(19, 'PRJ854', '2023-01-01', '2024-02-29'),
(19, 'PRJ003', '2024-03-01', '2024-04-30'),
(19, 'PRJ854', '2024-05-01', NULL),
(20, 'PRJ854', '2024-01-01', NULL);

-- --------------------------------------------------------

--
-- Struttura della tabella `project`
--

CREATE TABLE `project` (
  `id` varchar(6) NOT NULL,
  `branch_id` varchar(4) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `project`
--

INSERT INTO `project` (`id`, `branch_id`, `name`) VALUES
('PRJ003', 'BE04', 'TRIK TROK'),
('PRJ027', 'IT07', 'ISTAT - POPULATION OVERVIEW'),
('PRJ029', 'IT06', 'ISTAT - POLLUTION'),
('PRJ854', 'NO01', 'ICEBERG');

-- --------------------------------------------------------

--
-- Struttura della tabella `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `role`
--

INSERT INTO `role` (`id`, `name`) VALUES
(1, 'Developer Senior'),
(2, 'Project Manager'),
(3, 'Database Administrator'),
(4, 'Analyst'),
(5, 'Devops'),
(6, 'Developer');

-- --------------------------------------------------------

--
-- Struttura della tabella `salary`
--

CREATE TABLE `salary` (
  `role_id` int(11) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `salary` decimal(20,6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `salary`
--

INSERT INTO `salary` (`role_id`, `start_date`, `end_date`, `salary`) VALUES
(1, '2023-01-01', '2023-12-31', 2300.000000),
(1, '2024-01-01', '2024-12-31', 2450.000000),
(2, '2023-01-01', '2023-12-31', 2850.000000),
(2, '2024-01-01', '2024-12-31', 2930.000000),
(3, '2023-01-01', '2023-12-31', 2850.000000),
(3, '2024-01-01', '2024-12-31', 2900.000000),
(4, '2023-01-01', '2023-12-31', 2450.000000),
(4, '2024-01-01', '2024-12-31', 2510.000000),
(5, '2023-01-01', '2023-12-31', 3000.000000),
(5, '2024-01-01', '2024-12-31', 3200.000000),
(6, '2023-01-01', '2023-12-31', 2050.000000),
(6, '2024-01-01', '2024-12-31', 2100.000000);

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `branch`
--
ALTER TABLE `branch`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK_branch_name` (`name`);

--
-- Indici per le tabelle `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_employee_branch` (`branch_id`),
  ADD KEY `FK_employee_role` (`role_id`);

--
-- Indici per le tabelle `employee_projects`
--
ALTER TABLE `employee_projects`
  ADD PRIMARY KEY (`employee_id`,`start_date`),
  ADD KEY `FK_employee_project_project_id` (`project_id`);

--
-- Indici per le tabelle `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_project_branch` (`branch_id`);

--
-- Indici per le tabelle `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `salary`
--
ALTER TABLE `salary`
  ADD PRIMARY KEY (`role_id`,`start_date`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `employee`
--
ALTER TABLE `employee`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT per la tabella `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `employee`
--
ALTER TABLE `employee`
  ADD CONSTRAINT `FK_employee_branch` FOREIGN KEY (`branch_id`) REFERENCES `branch` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_employee_role` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`);

--
-- Limiti per la tabella `employee_projects`
--
ALTER TABLE `employee_projects`
  ADD CONSTRAINT `FK_employee_project_employee_id` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`id`),
  ADD CONSTRAINT `FK_employee_project_project_id` FOREIGN KEY (`project_id`) REFERENCES `project` (`id`);

--
-- Limiti per la tabella `project`
--
ALTER TABLE `project`
  ADD CONSTRAINT `FK_project_branch` FOREIGN KEY (`branch_id`) REFERENCES `branch` (`id`);

--
-- Limiti per la tabella `salary`
--
ALTER TABLE `salary`
  ADD CONSTRAINT `salary_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;