package com.lihelper.service.impl;

import java.util.List;
import java.util.Map;

import com.lihelper.dao.AlarmDao;
import com.lihelper.dao.AlarmModeDao;
import com.lihelper.model.Alarm;
import com.lihelper.model.AlarmMode;
import com.lihelper.model.RequestHolder;
import com.lihelper.model.ResultMessage;
import com.lihelper.service.NotifyAlarmDistributeService;
import com.lihelper.service.NotifyAlarmService;

public class NotifyAlarmDistributeServiceImpl implements
		NotifyAlarmDistributeService {

	@Override
	public ResultMessage alarm(String alarmType, String alarmItem,
			int currentValue) {

		// 通过clientId/alarmType/alarmItem获取监控信息
		int clientId = RequestHolder.getCurrentClient().getId();
		Alarm alarm = alarmDao.getAlarm(clientId, alarmType, alarmItem);
		if (alarm == null) {
			return new ResultMessage(-205, "clientId" + clientId
					+ " is no alarm item");
		}

		// 获取报警的方式
		List<String> alarmModeSet = alarmModeDao.getAlarmModeByAlarmId(alarm
				.getId());
		if (alarmModeSet == null || alarmModeSet.size() == 0) {
			return new ResultMessage(-206, "clientId" + clientId
					+ " is no alarm mode");
		}

		// 根据monitorAlarmId获取monitorMode集合,目前只支持邮件方式
		for (String alarmMode : alarmModeSet) {
			String message = getMessage(alarm, currentValue);
			String destination = getDestination(alarmMode);
			getNotifyAlarmService(alarmMode).alarm(destination, message);
		}
		return ResultMessage.SUCCESS;
	}

	private String getDestination(String alarmMode) {
		if (AlarmMode.email.name().equalsIgnoreCase(alarmMode)) {
			return RequestHolder.getCurrentUser().getAlarmEmail();
		}

		return RequestHolder.getCurrentUser().getAlarmPhone();
	}

	private String getMessage(Alarm alarm, int currentValue) {
		if (alarm.getAlarmItem() == "healthd") {
			return new StringBuffer(alarm.getAlarmType()).append(" not ok")
					.toString();
		}

		return new StringBuffer(alarm.getAlarmType()).append(":")
				.append(alarm.getAlarmItem()).append(",current value:")
				.append(currentValue).toString();
	}

	private NotifyAlarmService getNotifyAlarmService(String model) {
		NotifyAlarmService notifyAlarmService = notifyAlarmServiceMap
				.get(model);
		// 默认报警为邮件
		if (notifyAlarmService == null) {
			notifyAlarmServiceMap.get(AlarmMode.defaut.name());
		}
		return notifyAlarmService;
	}

	private Map<String, NotifyAlarmService> notifyAlarmServiceMap;

	public void setNotifyAlarmServiceMap(
			Map<String, NotifyAlarmService> notifyAlarmServiceMap) {
		this.notifyAlarmServiceMap = notifyAlarmServiceMap;
	}

	private AlarmModeDao alarmModeDao;

	public void setAlarmModeDao(AlarmModeDao alarmModeDao) {
		this.alarmModeDao = alarmModeDao;
	}

	private AlarmDao alarmDao;

	public void setAlarmDao(AlarmDao alarmDao) {
		this.alarmDao = alarmDao;
	}

}
