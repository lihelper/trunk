package com.lihelper.dao;

import java.util.List;

public interface AlarmModeDao {

	public List<String> getAlarmModeByAlarmId(int alarmId);

	public int insertAlarmMode(int alarmId, String alarmModeName);
}
