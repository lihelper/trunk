package com.lihelper.model;

import java.util.HashMap;
import java.util.Map;

public enum AlarmItemEnum {
	CPU("cpu"), MEM("mem"), DISK("disk"), IO("io"), FLOW("flow"), CPU_SWITCH("cpu_switch"), MEM_SWITCH("mem_switch"), DISK_SWITCH("disk_switch"), IO_SWITCH("io_switch"), FLOW_SWITCH("flow_switch");

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
			return AlarmItemEnum.CPU;
		}
		return alarmItemEnum;
	}
}
