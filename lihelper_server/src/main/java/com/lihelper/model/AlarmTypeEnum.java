package com.lihelper.model;

import java.util.HashMap;
import java.util.Map;

public enum AlarmTypeEnum {
	Basic("basic"), Mysql("mysql"), Apache("apache"), Php("php"), Memcached(
			"memcached"), Nginx("nginx"), Custom("custom");

	public static Map<String, AlarmTypeEnum> ALARM_TYPE_ENUMS = new HashMap<String, AlarmTypeEnum>();

	static {
		AlarmTypeEnum[] alarmTypEnums = AlarmTypeEnum.values();
		for (AlarmTypeEnum alarmType : alarmTypEnums) {
			ALARM_TYPE_ENUMS.put(alarmType.getName(), alarmType);
		}
	}

	private String name;

	private AlarmTypeEnum(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}

	public static AlarmTypeEnum getAlarmTypeEnum(String name) {
		AlarmTypeEnum alarmTypeEnum = ALARM_TYPE_ENUMS.get(name);
		if (alarmTypeEnum == null) {
			return AlarmTypeEnum.Basic;
		}
		return alarmTypeEnum;
	}

}
