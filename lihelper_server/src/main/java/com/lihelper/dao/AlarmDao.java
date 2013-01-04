package com.lihelper.dao;

import com.lihelper.model.Alarm;

public interface AlarmDao {
	/**
	 * 获取alarm完整信息
	 * 
	 * @param clientId
	 * @param alarmType
	 * @param alarmItem
	 * @return
	 */
	public Alarm getAlarm(int clientId, String alarmType, String alarmItem);

	/**
	 * 设置监控报警，返回alarmId
	 * 
	 * @param alarmType
	 * @param alarmItem
	 * @param alarmValue
	 * @return
	 */
	public int inertAlarm(int clientId, String alarmType, String alarmItem, int alarmValue);
}
