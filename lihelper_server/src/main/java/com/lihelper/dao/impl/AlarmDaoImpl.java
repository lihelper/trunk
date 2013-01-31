package com.lihelper.dao.impl;

import java.util.HashMap;
import java.util.Map;

import org.springframework.orm.ibatis.SqlMapClientOperations;

import com.lihelper.dao.AlarmDao;
import com.lihelper.model.Alarm;

public class AlarmDaoImpl implements AlarmDao {

	@Override
	public Alarm getAlarm(int clientId, String alarmType, String alarmItem) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("clientId", clientId);
		params.put("alarmType", alarmType);
		params.put("alarmItem", alarmItem);

		return (Alarm) sqlMapTemplate.queryForObject("alarm.getAlarm", params);
	}

	private SqlMapClientOperations sqlMapTemplate;

	public void setSqlMapTemplate(SqlMapClientOperations sqlMapTemplate) {
		this.sqlMapTemplate = sqlMapTemplate;
	}

	@Override
	public int insertAlarm(int clientId, String alarmType, String alarmItem, int alarmValue) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("clientId", clientId);
		params.put("alarmType", alarmType);
		params.put("alarmItem", alarmItem);
		params.put("alarmValue", alarmValue);
		return (Integer) sqlMapTemplate.insert("alarm.insertAlarm", params);
	}
}
