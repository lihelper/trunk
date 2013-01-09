#! /usr/bin/env python
#-*- coding: utf-8 -*-

#######################################################
# -----------------------------------------------------
#file name:    tp.py
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
import simplejson as json
        
                        
def create_daily_file():
    try:
	for i in range(0,24):
	    for j in range(0,60,5):
		print str(i) + ":" + str(j) + "	" + "value"
    except SyntaxError:
	print '2'
#	logger.debug("create_daily_file failure")

if __name__ == '__main__':
    create_daily_file()
