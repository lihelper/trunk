package com.lihelper.service;

import com.lihelper.model.ResultMessage;

public interface NotifyAlarmService {

	public ResultMessage alarm(String alarmType,
			String alarmItem, int currentValue);
}
