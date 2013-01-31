#! /usr/bin/env python
#-*- coding: utf-8 -*-

#######################################################
# -----------------------------------------------------
#file name:    create_history_data.py
#copyright (c) lihelper-inc
#author        xiangming.hexm
#data          2013.1.1
#
#modify
#data
#
#Version       v0.1
#------------------------------------------------------
########################################################

import os
import time
import xmlrpclib
import sys
import log
import simplejson as json
import monitor_info as monitor
        
logger = log.LOG().getlogger()
HISTORY_DATA_DIR = './history_data/'
HISTORY_TEMPLATE_DIR = './history_data/template'

def b_create_daily_file():
	try:
		today = str(time.strftime('%Y-%m-%d',time.localtime(time.time())))
		for fileName in os.listdir (HISTORY_DATA_DIR):
			if fileName == today:
				global logger
				logger.debug("data file is exist")
				return True
		os.popen('cp ' + HISTORY_TEMPLATE_DIR + " " +  HISTORY_DATA_DIR + today)
		#global logger
		logger.debug("create_daily_file by " + today)
		return True
	except SyntaxError:
		#global logger
		logger.debug("create_daily_file failure")
		return False

def time2line(time_format):
	try:
		hour = time_format.split(":")[0]
		minute = time_format.split(":")[1]
		line = int(hour) * 12 + int(minute)/5 + 1
		#global logger
		logger.debug("get the time to line " + str(time_format) + ":" + str(line) )
		return line
	except SyntaxError:
		#global logger
		logger.debug("time format to line num error!")

def get_machine_value():
	try:
		total_mem = os.popen('cat /proc/meminfo |grep MemTotal| awk -F " " \'{print $2}\'').read().strip()
		free_mem =  os.popen('cat /proc/meminfo |grep MemFree| awk -F " " \'{print $2}\'').read().strip()
		mem_dict = {"total_mem":total_mem,"free_mem":free_mem}
		network_dict = monitor.get_network()
		cpu_usage = monitor.get_cpu()
		result_dict = {'mem':mem_dict,'cpu':cpu_usage,'network':network_dict}
		#global logger
		logger.debug("get machine info -->: " + str(result_dict))
		return result_dict
	except SyntaxError:
		#global logger
		logger.debug("add_nc_info ERROR: " +  str(sys.exc_info()))

def write_history_data(time_format):
	try:
		TODAY = str(time.strftime('%Y-%m-%d',time.localtime(time.time())))
		check_file =  b_create_daily_file()
		if check_file == False:
			logger.debug("cat't find history data file ")
		value = str(get_machine_value()).replace('\'',"\"")
		line = str(time2line(time_format))
		print 'sed -i ' + "'" + line + "s/value" + "/" + value  + "/' " + HISTORY_DATA_DIR + TODAY
		os.popen('sed -i ' + "'" + line + "s/value" + "/" + value  + "/' " + HISTORY_DATA_DIR + TODAY )
		#global logger
		logger.debug("write history data sucessfull")
	except SyntaxError:
		#global logger
		logger.debug("write history data ERROR: " +  str(sys.exc_info()))

if __name__ == '__main__':
	#print get_machine_value()
	#sys.exit(0)
	write_min = -1
	while 1:
		time.sleep(3)
		current_time = str(time.strftime('%H:%M',time.localtime(time.time())))
		current_min = current_time.split(":")[1]
		bWrite = int(current_min)%5
		if bWrite == 0 and write_min != current_min:
			write_history_data(current_time)
			write_min = current_min
