package com.lihelper.model.dataobject;

import java.io.Serializable;
import java.util.Date;

public class AlarmLogDO implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -8131542178436582072L;
	private Date alarmTime;
	private int currentVlaue;
	private int status;
	private MonitorAlarmDO monitorAlarm;
	public Date getAlarmTime() {
		return alarmTime;
	}
	public void setAlarmTime(Date alarmTime) {
		this.alarmTime = alarmTime;
	}
	public int getCurrentVlaue() {
		return currentVlaue;
	}
	public void setCurrentVlaue(int currentVlaue) {
		this.currentVlaue = currentVlaue;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	public MonitorAlarmDO getMonitorAlarm() {
		return monitorAlarm;
	}
	public void setMonitorAlarm(MonitorAlarmDO monitorAlarm) {
		this.monitorAlarm = monitorAlarm;
	}
}
