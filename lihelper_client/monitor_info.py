#! /usr/bin/env python
#-*- coding: utf-8 -*-

#######################################################
# -----------------------------------------------------
#file name:    lc_get_monitor_info.py
#copyright (c) lihelper-inc
#author        xiangming.hexm
#data          2012.12.30
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
#import thread
#import threading
#from thread_pool import * 
#import json
import simplejson as json
        
logger = log.LOG().getlogger()
                        
def get_monitor_info():
    try:
	mem = os.popen('cat /proc/meminfo |grep MemTotal| awk -F " " \'{print $2}\'').read().strip()
	free_mem =  os.popen('cat /proc/meminfo |grep MemFree| awk -F " " \'{print $2}\'').read().strip()
        mem_usage = str(int(mem) - int(free_mem))
	cpu_usage = os.popen('top -n 1 |grep Cpu |awk -F " " \'{print $2}\'').read().strip().split("%")[0]
	timestamp = os.popen('/bin/date |awk -F " " \'{print $4}\'').read().strip()
	print cpu_usage
	dict_result = {"code":200,"message":"get monitor info","data":{"mem_usage":mem_usage,"cpu":cpu_usage,"timestamp":timestamp}}
	json_result = json.dumps(dict_result)
	return json_result
	global logger
        logger.debug("get monitor info -->: " + str(json_resout))
    except SyntaxError:
        logger.debug("add_nc_info ERROR: " +  str(sys.exc_info()))

if __name__ == '__main__':
	get_monitor_info()

