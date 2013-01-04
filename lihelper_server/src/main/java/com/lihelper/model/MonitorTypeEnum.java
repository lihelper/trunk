package com.lihelper.model;

import java.util.HashMap;
import java.util.Map;

public enum MonitorTypeEnum {
	Cpu("cpu"), Mem("mem"), Network("network");

	public static Map<String, MonitorTypeEnum> MONITOR_TYPE_ENUMS = new HashMap<String, MonitorTypeEnum>();

	static {
		MonitorTypeEnum[] monitorTypEnums = MonitorTypeEnum.values();
		for (MonitorTypeEnum monitorType : monitorTypEnums) {
			MONITOR_TYPE_ENUMS.put(monitorType.getName(), monitorType);
		}
	}

	private String name;

	private MonitorTypeEnum(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}

	public static MonitorTypeEnum getMonitorTypeEnum(String name) {
		MonitorTypeEnum monitorTypeEnum = MONITOR_TYPE_ENUMS.get(name);
		if (monitorTypeEnum == null) {
			return MonitorTypeEnum.Cpu;
		}
		return monitorTypeEnum;
	}

}
