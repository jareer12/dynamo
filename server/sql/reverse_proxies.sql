CREATE TABLE IF NOT EXISTS `reverse_proxies` (
  `id` varchar(125) NOT NULL,
  `name` text NOT NULL,
  `target` text NOT NULL,
  `targetPort` int(11) DEFAULT '80',
  `host` text NOT NULL,
  `port` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) 
