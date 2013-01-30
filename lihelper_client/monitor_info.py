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
import random
import server_information
import simplejson as json
        
logger = log.LOG().getlogger()
                        
def get_monitor_info():
	try:
		mem_dict = get_mem()
		usage_cpu = get_cpu()
		timestamp = os.popen('/bin/date |awk -F " " \'{print $4}\'').read().strip()
		net_info_list = get_network()
		dict_result = {"code":200,"data":{"mem":mem_dict,"usage_cpu":usage_cpu,"timestamp":timestamp,"nio":net_info_list}}
		json_result = json.dumps(dict_result)
		global logger
		logger.debug("get monitor info -->: " + str(json_result))
		return json_result
	except SyntaxError:
		logger.debug("get monitor info ERROR: " +  str(sys.exc_info()))

def get_mem():
	try:
		total_mem = os.popen('cat /proc/meminfo |grep MemTotal| awk -F " " \'{print $2}\'').read().strip()
		free_mem =  os.popen('cat /proc/meminfo |grep MemFree| awk -F " " \'{print $2}\'').read().strip()
		mem_dict = {"total_mem":total_mem,"free_mem":free_mem}
		global logger
		logger.debug("get mem info -->: " + str(mem_dict))
		return mem_dict
	except SyntaxError:
		logger.debug("get mem info ERROR: " +  str(sys.exc_info()))


def get_cpu():
	try:
		cpustat =server_information.Server.cpustat()
		tstat = cpustat['total']
		used  = tstat['used']
		all  = tstat['all']
		cpu_usage = "%.2f" % float(used/all) 
		global logger
		logger.debug("get cpu info from monitor_info cpu_usage: " + str(cpu_usage))
		return cpu_usage   
	except SyntaxError:
		logger.debug("get cpu_usage info from monitor_info error")

def get_network():

	try:
		nets = os.popen('ls /etc/sysconfig/network-scripts/ifcfg-*').read().strip().split('\n')
		pre_list = []
		end_list = []
		for net in nets:
			tmp_dict = {}
			net_name = net.replace('/etc/sysconfig/network-scripts/ifcfg-','')
			rx_pre = os.popen("cat /proc/net/dev | grep " + net_name +  " | tr : ' ' | awk '{print $2}'").read().strip()
			tx_pre = os.popen("cat /proc/net/dev | grep " + net_name + " | tr : ' ' | awk '{print $10}'").read().strip()
			#print rx_pre,tx_pre
			tmp_dict = {"net_name":net_name,"rx":rx_pre,"tx":tx_pre}
			pre_list.append(tmp_dict)
		
		time.sleep(1)
		for net in nets:
			tmp_dict1 = {}
			net_name = net.replace('/etc/sysconfig/network-scripts/ifcfg-','')
			rx_end = os.popen("cat /proc/net/dev | grep " + net_name +  " | tr : ' ' | awk '{print $2}'").read().strip()
			tx_end = os.popen("cat /proc/net/dev | grep " + net_name + " | tr : ' ' | awk '{print $10}'").read().strip()
			tmp_dict1 = {"net_name":net_name,"rx":rx_end,"tx":tx_end}
			end_list.append(tmp_dict1)
	
		net_list = []	
		for i in range(len(pre_list)):
			info_dict = {}	
			tx = str(int(end_list[i]['tx']) - int(pre_list[i]['tx']))
			rx = str(int(end_list[i]['rx']) - int(pre_list[i]['rx']))
			info_dict = {"net_name":pre_list[i]['net_name'],"tx":tx,"rx":rx}
			net_list.append(info_dict)
		global logger
		logger.debug("get network info from monitor: " + str(net_list))
		return net_list
	except SyntaxError:
		logger.debug("get network info from monitor_info error")       

if __name__ == '__main__':
#	get_network()
	print get_monitor_info()
