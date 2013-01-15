#!/usr/bin/env python
#
# Copyright 2009 Facebook
#
# Licensed under the Apache License, Version 2.0 (the "License"); you may
# not use this file except in compliance with the License. You may obtain
# a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
# WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
# License for the specific language governing permissions and limitations
# under the License.

import tornado.httpserver
import tornado.ioloop
import tornado.options
import tornado.web
import machine_info 
import monitor_info
import op_machine
import get_history_data
import alarm_control

from tornado.options import define, options

define("port", default=10888, help="run on the given port", type=int)


class MachineInfoHandler(tornado.web.RequestHandler):
    def get(self):
	print machine_info.get_machine_info()
	self.write(machine_info.get_machine_info())

class MonitorInfoHandler(tornado.web.RequestHandler):
    def get(self):
	self.write(monitor_info.get_monitor_info())

class OpMachineHandler(tornado.web.RequestHandler):
    def get(self):
	self.write(op_machine.restart_machine())

class GetHistoryDataHandler(tornado.web.RequestHandler):
	def get(self):
		begin = self.get_argument('begin', '')
		end = self.get_argument('end', '')
		#self.write(get_history_data.get_history_data("2013-01-01","2013-01-02",'mem'))
		self.write(get_history_data.get_history_data(begin,end,'mem'))

class SetAlarmHandler(tornado.web.RequestHandler):
	def get(self):
		type = self.get_argument('alarm_type', '')
		item = self.get_argument('alarm_item', '')
		value = self.get_argument('alarm_value', '')
		#self.write(get_history_data.get_history_data("2013-01-01","2013-01-02",'mem'))
		self.write(alarm_control.modify_alarm_conf(type,item,value))

def main():
    tornado.options.parse_command_line()

    app_liHelper = tornado.web.Application([
        (r"/lihelper/basic?", MachineInfoHandler),
	(r"/lihelper/monitor?", MonitorInfoHandler),
	(r"/lihelper/operator?", OpMachineHandler),
	(r"/lihelper/history?",GetHistoryDataHandler),
	(r"/lihelper/alarm?",SetAlarmHandler),
    ])
    http_server = tornado.httpserver.HTTPServer(app_liHelper)
    http_server.listen(options.port)
    tornado.ioloop.IOLoop.instance().start()


if __name__ == "__main__":
    main()
