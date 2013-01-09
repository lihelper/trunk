#! /usr/bin/env python
#-*- coding: utf-8 -*-

#######################################################
# -----------------------------------------------------
#file name:    lc_alarm_control.py
#copyright (c) lihelper-inc
#author        xiangming.hexm
#data          2013.01.03
#
#modify
#data
#
#Version       v0.1
#------------------------------------------------------
########################################################

import os
import time
import SimpleXMLRPCServer
import xmlrpclib
import sys
import log
import simplejson as json
import ConfigParser


ALARM_FILE_PATH = './conf/alarm.ini'
MEM_ALARM = 'mem_alarm'
CPU_ALARM = 'cpu_alarm'
NGINX_ALARM = 'nginx_alarm'
      
logger = log.LOG().getlogger()
                        
def alarm_info():
	try:
		mem = os.popen('cat /proc/meminfo |grep MemTotal| awk -F " " \'{print $2}\'').read().strip()
		free_mem =  os.popen('cat /proc/meminfo |grep MemFree| awk -F " " \'{print $2}\'').read().strip()
		mem_usage = str(int(mem) - int(free_mem))
		mem_percent = float(mem_usage) / float(mem)
		mem_percent = "%.2f" % mem_percent
		config = ConfigParser.ConfigParser()
		config.readfp(open(ALARM_FILE_PATH))
		mem_switch = config.get(MEM_ALARM,"switch")
		if mem_switch == 'on':
			mem_value = config.get(MEM_ALARM,"value")
			if mem_value <= mem_percent:
				print mem_value
				print  "do report mem to server"
		
		cpu_usage = os.popen('top -n 1 |grep Cpu |awk -F " " \'{print $2}\'').read().strip().split("%")[0]
		cpu_switch = config.get(CPU_ALARM,"switch")
		if cpu_switch == 'on':
			cpu_value = config.get(CPU_ALARM,"value")
			if cpu_value <= cpu_usage:
				print mem_value
				print "do report cpu to server"
	except SyntaxError:
		logger.debug("add_nc_info ERROR: " +  str(sys.exc_info()))

def modify_alarm_conf(type,element,value):
	try:
		config = ConfigParser.ConfigParser()
		config.read(ALARM_FILE_PATH)
		config.set(type,element,value)
		config.write(open(ALARM_FILE_PATH, "w"))
		return '{"code":200}'
	except SyntaxError:
		logger.debug("modify alarm conf : %s,%s,%s",type,element,value)
	

if __name__ == '__main__':
	#print get_monitor_info()
	modify_alarm_conf(CPU_ALARM,'switch','on')
#	while 1:
#		config = ConfigParser.ConfigParser()
#		config.readfp(open(ALARM_FILE_PATH))
#		a = config.get("cpu_alarm","switch")
#		print a	


