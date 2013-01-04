package com.lihelper.model;

import java.util.HashMap;
import java.util.Map;

public enum AlarmItemEnum {
	Health("health"), Cpu("cpu"), Mem("mem"), Disk("disk"), Io("io"), Flow(
			"flow");

	public static Map<String, AlarmItemEnum> ALARM_ITEM_ENUMS = new HashMap<String, AlarmItemEnum>();

	static {
		AlarmItemEnum[] alarmTypEnums = AlarmItemEnum.values();
		for (AlarmItemEnum alarmTypeEnum : alarmTypEnums) {
			ALARM_ITEM_ENUMS.put(alarmTypeEnum.getName(), alarmTypeEnum);
		}
	}

	private String name;

	private AlarmItemEnum(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}

	public static AlarmItemEnum getAlarmItemEnum(String name) {
		AlarmItemEnum alarmItemEnum = ALARM_ITEM_ENUMS.get(name);
		if (alarmItemEnum == null) {
			return AlarmItemEnum.Health;
		}
		return alarmItemEnum;
	}
}
