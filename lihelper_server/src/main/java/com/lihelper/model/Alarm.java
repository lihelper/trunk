package com.lihelper.model;

import java.io.Serializable;
import java.util.List;

public class Alarm implements Serializable {

	private static final long serialVersionUID = 8455246685221738390L;
	private int id;
	private String alarmType;
	private String alarmItem;
	private int alarmValue;
	private int status;
	private int clientId;
	private List<String> alarmModeSet;
	
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

	public int getAlarmValue() {
		return alarmValue;
	}
	public void setAlarmValue(int alarmValue) {
		this.alarmValue = alarmValue;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	public int getClientId() {
		return clientId;
	}
	public void setClientId(int clientId) {
		this.clientId = clientId;
	}
	public List<String> getAlarmModeSet() {
		return alarmModeSet;
	}
	public void setAlarmModeSet(List<String> alarmModeSet) {
		this.alarmModeSet = alarmModeSet;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
}
