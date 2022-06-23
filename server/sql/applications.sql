CREATE TABLE IF NOT EXISTS `applications` (
  `id` varchar(125) NOT NULL,
  `name` text NOT NULL,
  `created` bigint(20) NOT NULL,
  `service` text NOT NULL,
  `git` int(11) NOT NULL,
  `run_cmd` text NOT NULL,
  `build_cmd` text NOT NULL,
  PRIMARY KEY (`id`)
);