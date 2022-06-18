CREATE TABLE IF NOT EXISTS `storage_clouds` (
  `id` varchar(125) NOT NULL,
  `name` varchar(75) NOT NULL,
  `created` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
);