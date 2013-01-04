package com.lihelper.api.action.callback;

import com.lihelper.api.action.ExecuteAction;
import com.lihelper.model.ResultMessage;
import com.lihelper.service.NotifyAlarmDistributeService;
import com.lihelper.util.ParameterUtil;

public class NotifyAlarmAction implements ExecuteAction {

	@Override
	public ResultMessage doExecute() {
		String alarmType = ParameterUtil.getParameterStringValue("alarm_type");
		String alarmItem = ParameterUtil.getParameterStringValue("alarm_item");
		int currentValue = Integer.valueOf(ParameterUtil.getParameterStringValue("current_value"));

		return notifyAlarmDistributeService.alarm(alarmType, alarmItem, currentValue);
	}

	private NotifyAlarmDistributeService notifyAlarmDistributeService;

	public void setNotifyAlarmDistributeService(
			NotifyAlarmDistributeService notifyAlarmDistributeService) {
		this.notifyAlarmDistributeService = notifyAlarmDistributeService;
	}

}
