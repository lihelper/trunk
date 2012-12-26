package com.lihelper.service;

import com.lihelper.model.ResultMessage;

public interface NotifyAlarmService {

	/**
	 * 根据报警类型，报警项以及当前值，提供报警通知
	 * 
	 * @param alarmType
	 * @param alarmItem
	 * @param currentValue
	 * @return
	 */
	public ResultMessage alarm(String alarmType, String alarmItem,
			int currentValue);

	/**
	 * 设置报警项
	 * @param alarmType
	 * @param alarmItem
	 * @param alarmValue
	 * @return
	 */
	public ResultMessage setAlarm(String alarmType, String alarmItem,
			int alarmValue);
}
