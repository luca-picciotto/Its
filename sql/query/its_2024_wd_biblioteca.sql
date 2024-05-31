-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Apr 09, 2024 alle 12:57
-- Versione del server: 10.4.28-MariaDB
-- Versione PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `its_2024_wd_biblioteca`
--
create database if not exists its_2024_wd_biblioteca;
use its_2024_wd_biblioteca;
-- --------------------------------------------------------

--
-- Struttura della tabella `autore`
--

CREATE TABLE `autore` (
  `id_autore` int(11) NOT NULL,
  `nome` varchar(50) DEFAULT NULL,
  `cognome` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `autore`
--

INSERT INTO `autore` (`id_autore`, `nome`, `cognome`) VALUES
(1, NULL, 'Omero'),
(2, 'Italo', 'Svevo'),
(3, NULL, 'Virgilio'),
(4, 'Alessandro', 'Manzoni'),
(11, 'Eugenio', 'Montale');

-- --------------------------------------------------------

--
-- Struttura della tabella `autore_libro`
--

CREATE TABLE `autore_libro` (
  `id_autore` int(11) NOT NULL,
  `id_libro` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `autore_libro`
--

INSERT INTO `autore_libro` (`id_autore`, `id_libro`) VALUES
(1, '978-8831743014'),
(3, '978-8831743013');

-- --------------------------------------------------------

--
-- Struttura della tabella `copia_libro`
--

CREATE TABLE `copia_libro` (
  `codice_interno` int(11) NOT NULL,
  `isbn` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `copia_libro`
--

INSERT INTO `copia_libro` (`codice_interno`, `isbn`) VALUES
(1, '927-8974522230'),
(2, '927-8974522230'),
(3, '927-8974522230'),
(4, '927-8974522240'),
(5, '927-8974522240'),
(6, '927-8974522250'),
(7, '978-8831743013'),
(8, '978-8831743014');

-- --------------------------------------------------------

--
-- Struttura della tabella `genere`
--

CREATE TABLE `genere` (
  `id_genere` int(11) NOT NULL,
  `denominazione` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `genere`
--

INSERT INTO `genere` (`id_genere`, `denominazione`) VALUES
(5, 'Epica'),
(4, 'Poesie'),
(1, 'Romanzo'),
(3, 'Saggio');

-- --------------------------------------------------------

--
-- Struttura della tabella `libro`
--

CREATE TABLE `libro` (
  `isbn` varchar(20) NOT NULL,
  `titolo` varchar(255) NOT NULL,
  `anno_pubblicazione` year(4) NOT NULL,
  `id_genere` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `libro`
--

INSERT INTO `libro` (`isbn`, `titolo`, `anno_pubblicazione`, `id_genere`) VALUES
('927-8974522230', 'La coscienza di Zeno', '2014', 1),
('927-8974522240', 'Senilità', '2017', 1),
('927-8974522250', 'Una vita', '1994', 1),
('948-8974555570', 'I promessi sposi', '2014', 1),
('978-8831743013', 'Eneide', '1987', 5),
('978-8831743014', 'Iliade', '1978', 5);

-- --------------------------------------------------------

--
-- Struttura della tabella `prestito`
--

CREATE TABLE `prestito` (
  `id_tesserato` int(11) NOT NULL,
  `data_prestito` date NOT NULL,
  `codice_interno` int(11) NOT NULL,
  `data_restituzione` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `prestito`
--

INSERT INTO `prestito` (`id_tesserato`, `data_prestito`, `codice_interno`, `data_restituzione`) VALUES
(2, '2024-04-04', 1, '2024-04-08'),
(4, '2024-04-09', 5, NULL),
(5, '2024-04-06', 6, NULL),
(5, '2024-04-07', 8, NULL),
(6, '2024-04-09', 1, NULL);

-- --------------------------------------------------------

--
-- Struttura della tabella `tesserato`
--

CREATE TABLE `tesserato` (
  `numero_tessera` int(11) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `cognome` varchar(50) NOT NULL,
  `telefono` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `tesserato`
--

INSERT INTO `tesserato` (`numero_tessera`, `nome`, `cognome`, `telefono`) VALUES
(1, 'Mario', 'Rossi', '01156987412'),
(2, 'Luigi', 'Bianchi', '01126543101'),
(3, 'Lucia', 'Verdi', '01145872368'),
(4, 'Serena', 'Rosi', '01132874153'),
(5, 'Domitilla', 'Neri', '01198989741'),
(6, 'Enrico', 'Gialli', '01128098745'),
(7, 'Mafalda', 'Azzurri', '01115480056');

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `autore`
--
ALTER TABLE `autore`
  ADD PRIMARY KEY (`id_autore`);

--
-- Indici per le tabelle `autore_libro`
--
ALTER TABLE `autore_libro`
  ADD PRIMARY KEY (`id_autore`,`id_libro`),
  ADD KEY `id_libro` (`id_libro`);

--
-- Indici per le tabelle `copia_libro`
--
ALTER TABLE `copia_libro`
  ADD PRIMARY KEY (`codice_interno`),
  ADD KEY `isbn` (`isbn`);

--
-- Indici per le tabelle `genere`
--
ALTER TABLE `genere`
  ADD PRIMARY KEY (`id_genere`),
  ADD UNIQUE KEY `denominazione` (`denominazione`);

--
-- Indici per le tabelle `libro`
--
ALTER TABLE `libro`
  ADD PRIMARY KEY (`isbn`),
  ADD KEY `id_genere` (`id_genere`);

--
-- Indici per le tabelle `prestito`
--
ALTER TABLE `prestito`
  ADD PRIMARY KEY (`id_tesserato`,`data_prestito`),
  ADD KEY `codice_interno` (`codice_interno`);

--
-- Indici per le tabelle `tesserato`
--
ALTER TABLE `tesserato`
  ADD PRIMARY KEY (`numero_tessera`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `autore`
--
ALTER TABLE `autore`
  MODIFY `id_autore` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT per la tabella `copia_libro`
--
ALTER TABLE `copia_libro`
  MODIFY `codice_interno` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT per la tabella `genere`
--
ALTER TABLE `genere`
  MODIFY `id_genere` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT per la tabella `tesserato`
--
ALTER TABLE `tesserato`
  MODIFY `numero_tessera` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `autore_libro`
--
ALTER TABLE `autore_libro`
  ADD CONSTRAINT `autore_libro_ibfk_1` FOREIGN KEY (`id_autore`) REFERENCES `autore` (`id_autore`),
  ADD CONSTRAINT `autore_libro_ibfk_2` FOREIGN KEY (`id_libro`) REFERENCES `libro` (`isbn`);

--
-- Limiti per la tabella `copia_libro`
--
ALTER TABLE `copia_libro`
  ADD CONSTRAINT `copia_libro_ibfk_1` FOREIGN KEY (`isbn`) REFERENCES `libro` (`isbn`);

--
-- Limiti per la tabella `libro`
--
ALTER TABLE `libro`
  ADD CONSTRAINT `libro_ibfk_1` FOREIGN KEY (`id_genere`) REFERENCES `genere` (`id_genere`);

--
-- Limiti per la tabella `prestito`
--
ALTER TABLE `prestito`
  ADD CONSTRAINT `prestito_ibfk_1` FOREIGN KEY (`codice_interno`) REFERENCES `copia_libro` (`codice_interno`),
  ADD CONSTRAINT `prestito_ibfk_2` FOREIGN KEY (`id_tesserato`) REFERENCES `tesserato` (`numero_tessera`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;