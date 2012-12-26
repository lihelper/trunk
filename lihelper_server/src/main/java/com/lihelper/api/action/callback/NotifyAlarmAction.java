package com.lihelper.api.action.callback;

import com.lihelper.api.action.ExecuteAction;
import com.lihelper.model.ResultMessage;
import com.lihelper.service.NotifyAlarmService;
import com.lihelper.util.ParameterUtil;

public class NotifyAlarmAction implements ExecuteAction {

	@Override
	public ResultMessage doExecute() {
		String alarmType = ParameterUtil.getParameterValue("alarm_type");
		String alarmItem = ParameterUtil.getParameterValue("alarm_item");
		int currentValue = Integer.valueOf(ParameterUtil.getParameterValue("current_value"));

		return notifyAlarmService.alarm(alarmType, alarmItem, currentValue);
	}

	private NotifyAlarmService notifyAlarmService;

	public void setNotifyAlarmService(NotifyAlarmService notifyAlarmService) {
		this.notifyAlarmService = notifyAlarmService;
	}
}
