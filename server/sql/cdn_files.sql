CREATE TABLE IF NOT EXISTS `cdn_files` (
  `id` varchar(150) NOT NULL,
  `name` text NOT NULL,
  `extension` text NOT NULL,
  `cloud` text NOT NULL,
  `created` bigint(20) NOT NULL,
  PRIMARY KEY (`id`)
);