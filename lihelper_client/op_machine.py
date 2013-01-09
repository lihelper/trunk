#! /usr/bin/env python
#-*- coding: utf-8 -*-

#######################################################
# -----------------------------------------------------
#file name:    op_machine.py
#copyright (c) lihelper-inc
#author        xiangming.hexm
#data          2012.12.31
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
                        
def restart_machine():
    try:
	
	result = os.popen('ls').read().strip()
	dict_result = {"code":200,"message":"restart machine"}
	json_resout = json.dumps(dict_result)
	return json_resout
	global logger
        logger.debug("get monitor info -->: " + str(json_resout))
    except SyntaxError:
        logger.debug("add_nc_info ERROR: " +  str(sys.exc_info()))

if __name__ == '__main__':
	get_monitor_info()

