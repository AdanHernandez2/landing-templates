-- phpMyAdmin SQL Dump
-- version 4.9.4
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 24-12-2020 a las 00:09:59
-- Versión del servidor: 10.3.27-MariaDB-log-cll-lve
-- Versión de PHP: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `elreuymw_clonetube`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `misvideos`
--

CREATE TABLE `misvideos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `sinopsis` varchar(100) NOT NULL,
  `url` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `misvideos`
--

INSERT INTO `misvideos` (`id`, `nombre`, `sinopsis`, `url`) VALUES
(1, 'chill-lofi', 'instrumental', 'https://www.preview.scriptdan.xyz/videos/barista.mp4'),
(11, 'lofi', 'instrumental2', 'https://www.preview.scriptdan.xyz/videos/paz.mp4'),
(17, 'arboles', 'arboles', 'https://www.preview.scriptdan.xyz/videos/arboles.mp4'),
(18, 'camina', 'camina', 'https://www.preview.scriptdan.xyz/videos/camina.mp4'),
(19, 'ciudad', 'ciudad', 'https://www.preview.scriptdan.xyz/videos/ciudad.mp4'),
(20, 'fuego', 'fuego', 'https://www.preview.scriptdan.xyz/videos/fuego.mp4'),
(21, 'bebida', 'bebida', 'https://www.preview.scriptdan.xyz/videos/bebidas.mp4'),
(22, 'chica', 'chica', 'https://www.preview.scriptdan.xyz/videos/chica.mp4');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `misvideos`
--
ALTER TABLE `misvideos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `misvideos`
--
ALTER TABLE `misvideos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
