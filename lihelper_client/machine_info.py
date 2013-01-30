#! /usr/bin/env python
#-*- coding: utf-8 -*-

#######################################################
# -----------------------------------------------------
#file name:    lc_machine_info.py
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
import server_information
import simplejson as json
        
logger = log.LOG().getlogger()
                        
def get_machine_info():
    try:
	mem = os.popen('cat /proc/meminfo |grep MemTotal| awk -F " " \'{print $2}\'').read().strip()
	free_mem =  os.popen('cat /proc/meminfo |grep MemFree| awk -F " " \'{print $2}\'').read().strip()
        cpu = os.popen('cat /proc/cpuinfo |grep physical|grep id|sort -u|wc -l').read().strip()
	uptime = os.popen('uptime |awk -F "," \'{print $1}\'').read().strip()
	kernel = os.popen('uname -r').read().strip()
	release = os.popen('head -n 1 /etc/issue').read().strip()
	os_type = os.popen('uname -i').read().strip()
	disk_name_list = os.popen('df -h|grep -v Filesystem |awk -F " " \'{print $1}\'').read().strip().split('\n')
	disk_size_list = os.popen('df -h|grep -v Filesystem |awk -F " " \'{print $2}\'').read().strip().split('\n')
	if len(disk_name_list) == len(disk_size_list):
		i = 0
		disk_list = []
		while i<len(disk_name_list):
			tmp_dict = {}
			tmp_dict = {"mount":disk_name_list[i],"size":disk_size_list[i]}
			disk_list.append(tmp_dict)
			i += 1
	nets = os.popen('ls /etc/sysconfig/network-scripts/ifcfg-*').read().strip().split('\n')

	net_list = []
	for net in nets:
		tmp_dict = {}
		net_name = net.replace('/etc/sysconfig/network-scripts/ifcfg-','')
		net_ip = os.popen('cat ' + net + ' |grep IPADDR |grep -v \'#\'').read().strip()
		if net_name !="" and net_ip !="":
			net_ip = net_ip.replace("IPADDR=","")
			temp_dict = {"nio":net_name,"ip":net_ip}
			net_list.append(temp_dict)
	dict_result = {"code":200,"data":{"cpu":cpu,"mem":mem,"uptime":uptime,"kernel":kernel,"os_type":os_type,"disks":disk_list,"network":net_list,"release":release}}
	json_resout = json.dumps(dict_result)
	return json_resout
	global logger
        logger.debug("get machine_info -->: " + "mem: %s,cpu: %s,uptime %s,kernel: %s,os_type: %s",mem,cpu,uptime,kernel,os_type)
    except SyntaxError:
        logger.debug("add_nc_info ERROR: " +  str(sys.exc_info()))



if __name__ == '__main__':
	print get_machine_info()

