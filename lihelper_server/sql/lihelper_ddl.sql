use lihelper

--
-- Table structure for table `user`
--
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '@desc ����ID',
  `email` varchar(50) NOT NULL COMMENT '@desc �û�����',
  `password` varchar(50) NOT NULL COMMENT '@desc �û�����',
  `access_id` varchar(50) NOT NULL COMMENT '@desc accessId',
  `secret_key` varchar(50) NOT NULL COMMENT '@desc ��Կ', 
  `alarm_email` varchar(50) NOT NULL COMMENT '@desc ��������',
  `alarm_phone` varchar(50) NOT NULL COMMENT '@desc �����ֻ�',
  `gmt_create` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `gmt_modify` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;


--
-- Table structure for table `client`
--
DROP TABLE IF EXISTS `client`;
CREATE TABLE `client` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '@desc ����ID',
  `host` varchar(50) NOT NULL COMMENT '@desc ͨ��������ַ',
  `cpu` int(10) NOT NULL default 0 COMMENT '@desc ��λ��core����',
  `mem`  int(10) NOT NULL default 0  COMMENT '@desc ��λ��MB',
  `disk` int(10) NOT NULL default 0  COMMENT '@desc ��λ��GB', 
  `gmt_create` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `gmt_modify` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `user_id` int(10) NOT NULL COMMENT '@desc user���е�id����',
  PRIMARY KEY (`id`),
  UNIQUE KEY `host` (`host`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Table structure for table `monitor_alarm`
--
DROP TABLE IF EXISTS `monitor_alarm`;
CREATE TABLE `monitor_alarm` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '@desc ����ID',
  `alarm_type` varchar(50) NOT NULL COMMENT '@desc basic/mysql/apache/php/memcached/nginx/custom',
  `alarm_item` varchar(50) NOT NULL COMMENT '@desc health/cpu/mem/disk/io/flow',
  `alarm_value` int(10) NOT NULL default 0 COMMENT '@desc ��ֵ',
  `status`  int(10) NOT NULL default 0  COMMENT '@desc 1:ok,0:not ok',
  `alarm_mode`  int(10) NOT NULL default 0  COMMENT '@desc ������ʽ 1:����,2:�绰,3:�ʼ�', 
  `gmt_create` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `gmt_modify` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `client_id` int(10) NOT NULL COMMENT '@desc client���е�id����',
  PRIMARY KEY (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;


--
-- Table structure for table `alarm_log`
--
DROP TABLE IF EXISTS `alarm_log`;
CREATE TABLE `alarm_log` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '@desc ����ID',
  `monitor_alarm_id` int(10) NOT NULL COMMENT '@desc monitor_alarm���е�id����',
  `alarm_time` datetime NOT NULL,
  `current_value` int(10) NOT NULL default 0 COMMENT '@desc ��ʱֵ',
  `status`  int(10) NOT NULL default 0  COMMENT '@desc 1:success,0:failure',
  `gmt_create` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;