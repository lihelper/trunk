package com.lihelper.dao.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.orm.ibatis.SqlMapClientOperations;

import com.lihelper.dao.AlarmModeDao;

public class AlarmModeDaoImpl implements AlarmModeDao {

	@SuppressWarnings("unchecked")
	@Override
	public List<String> getAlarmModeByAlarmId(int alarmId) {
		return (List<String>) sqlMapTemplate.queryForList("alarmMode.getAlarmModeByAlarmId", alarmId);
	}

	@Override
	public int insertAlarmMode(int alarmId, String alarmModeName) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("alarmId", alarmId);
		params.put("alarmModeName", alarmModeName);
		return (Integer) sqlMapTemplate.insert("alarmMode.insertAlarmMode", params);
	}

	private SqlMapClientOperations sqlMapTemplate;

	public void setSqlMapTemplate(SqlMapClientOperations sqlMapTemplate) {
		this.sqlMapTemplate = sqlMapTemplate;
	}

}
