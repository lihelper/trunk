package com.lihelper.model;

import java.io.Serializable;

public class MonitorAlarm implements Serializable {

	private static final long serialVersionUID = 8455246685221738390L;
	
	private String alarmType;
	private String alarmItem;
	private int alarmVlaue;
	private int status;
	private int alarmMode;
	private BasicClient client;
	public String getAlarmType() {
		return alarmType;
	}
	public void setAlarmType(String alarmType) {
		this.alarmType = alarmType;
	}
	public String getAlarmItem() {
		return alarmItem;
	}
	public void setAlarmItem(String alarmItem) {
		this.alarmItem = alarmItem;
	}
	public int getAlarmVlaue() {
		return alarmVlaue;
	}
	public void setAlarmVlaue(int alarmVlaue) {
		this.alarmVlaue = alarmVlaue;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	public int getAlarmMode() {
		return alarmMode;
	}
	public void setAlarmMode(int alarmMode) {
		this.alarmMode = alarmMode;
	}
	public BasicClient getClient() {
		return client;
	}
	public void setClient(BasicClient client) {
		this.client = client;
	}
	
}
