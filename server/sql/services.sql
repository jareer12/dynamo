CREATE TABLE IF NOT EXISTS `services` (
  `id` varchar(125) NOT NULL,
  `slug` text NOT NULL,
  `name` text NOT NULL,
  `created` bigint(20) NOT NULL,
  `port` int(11) NOT NULL,
  PRIMARY KEY (`id`)
);