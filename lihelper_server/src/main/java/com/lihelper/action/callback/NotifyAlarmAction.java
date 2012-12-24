package com.lihelper.action.callback;

import com.lihelper.action.ExecuteAction;
import com.lihelper.model.ResultMessage;
import com.lihelper.service.NotifyAlarmService;


public class NotifyAlarmAction implements ExecuteAction {

	@Override
	public ResultMessage doExecute() {
		return notifyAlarmService.alarm();
	}
	
	private NotifyAlarmService notifyAlarmService;
	
	public void setNotifyAlarmService(NotifyAlarmService notifyAlarmService) {
		this.notifyAlarmService = notifyAlarmService;
	}
}
