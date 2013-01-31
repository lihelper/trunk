#! /usr/bin/env python
#-*- coding: utf-8 -*-

#######################################################
# -----------------------------------------------------
#file name:    get_history_data.py
#copyright (c) lihelper-inc
#author        xiangming.hexm
#data          2013.1.2
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
import datetime
import linecache
        
logger = log.LOG().getlogger()
HISTORY_DATA_DIR = './history_data/'
HISTORY_TEMPLATE_DIR = './history_data/template'
TODAY = str(time.strftime('%Y-%m-%d',time.localtime(time.time())))                        


def get_date_interval(start_time, end_time):
	try:
		ends = end_time.split("-")
		starts = start_time.split("-")
		end_year = int(ends[0])
		end_month = int(ends[1])
		end_day = int(ends[2])
		start_year = int(starts[0])
		start_month = int(starts[1])
		start_day = int(starts[2])
		d_end = datetime.date(end_year,end_month,end_day)
		d_start = datetime.date(start_year,start_month,start_day)
		if d_end == d_start:
			date_interval = 0
			return date_interval
		date_interval = int(str(d_end - d_start).split(' ')[0])
		return date_interval
		logger.debug("the date interval start_time :" + start_time + " end_time: " + end_time + "date_interval" + date_interval)
	except SyntaxError:
		logger.debug("get date interval error")


def get_history_data(start_time, end_time, element):
	try:
		ends = end_time.split("-")
		starts = start_time.split("-")
		end_year = int(ends[0])
		end_month = int(ends[1])
		end_day = int(ends[2])
		start_year = int(starts[0])
		start_month = int(starts[1])
		start_day = int(starts[2])
		date_interval = get_date_interval(start_time, end_time) 
		if date_interval > 288:
			date_interval = 288
		start_day =datetime.date(start_year,start_month,start_day)
		interval = 0
		file_list = []
		date_interval = date_interval + 1
		while interval < date_interval:
			temp_day = datetime.timedelta(days=interval)
			getfile = start_day + temp_day
			file_list.append(str(getfile))
			interval = interval + 1
		content_list = read_file_data(file_list,date_interval)
		if content_list != -1:
			return data2json(content_list,element)
		dict_result = {"code":-100,"message":"cat not get history data"}
		json_result = json.dumps(dict_result)
 		return json_result
	except SyntaxError:
		logger.debug("get history data failure")

def data2json(content_list,element):
	try:
		data_list = []
		for content in content_list:
			cs = content.split('\t')
			tmp_dict = {}
			cpu_dict = {}
			mem_dict = {}
			net_dict = {}
			if cs[1] == 'value':
				cpu_dict = {}
				mem_dict = {}
				net_dict = {}
			else:
				cs_dict = []
				cs_dict = eval(cs[1])
				for keys in cs_dict.keys():
					if keys == 'mem':
						mem_dict = cs_dict[keys]
					if keys == 'cpu':
						cpu_dict['cpu'] = cs_dict[keys]
					if keys == 'network':
						net_dict['network'] = cs_dict[keys]
			if element == 'cpu':
				tmp_dict = cpu_dict
			if element == 'mem':
				tmp_dict = mem_dict
			if element == 'network':
				tmp_dict = net_dict
			tmp_dict['timestamp'] = cs[0]
			data_list.append(tmp_dict)
		dict_result = {"code":200,"data":data_list}
		json_result = json.dumps(dict_result)
		return json_result
	except SyntaxError:
		return -1
		logger.debug("change to json content error ")	



def read_file_data(file_list,date_interval):
	try:
		content_list = []
		for file in file_list:
			file_path = HISTORY_DATA_DIR + file
			if os.path.isfile(file_path) ==  False:
				logger.debug(file_path + 'is not find ')
				file_path = HISTORY_TEMPLATE_DIR
			i = 1
			while i <= 288:
				if i%date_interval != 0:
					i = i + 1
					continue
				content_list.append(file + " " +  linecache.getline(file_path,i).strip())
				i = i + 1
		return content_list
	except SyntaxError:
		logger.debug("paser file failure")
	
if __name__ == '__main__':
    #get_date_interval('2011-12-23','2012-12-30')
    #get_history_data('2013-01-01','2013-01-02','mem')
    print get_history_data('2013-1-30','2013-1-31','mem')
    print get_history_data('2013-1-30','2013-1-31','cpu')
    print get_history_data('2013-1-30','2013-1-31','network')
