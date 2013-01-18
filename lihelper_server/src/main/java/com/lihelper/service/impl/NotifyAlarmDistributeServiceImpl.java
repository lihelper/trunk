package com.lihelper.service.impl;

import java.util.List;
import java.util.Map;

import com.lihelper.dao.AlarmDao;
import com.lihelper.dao.AlarmModeDao;
import com.lihelper.model.Alarm;
import com.lihelper.model.AlarmItemEnum;
import com.lihelper.model.AlarmModeEnum;
import com.lihelper.model.AlarmTypeEnum;
import com.lihelper.model.RequestHolder;
import com.lihelper.model.ResultMessage;
import com.lihelper.service.NotifyAlarmDistributeService;
import com.lihelper.service.NotifyAlarmService;

public class NotifyAlarmDistributeServiceImpl implements NotifyAlarmDistributeService {

	@Override
	public ResultMessage<Object> alarm(AlarmTypeEnum alarmTypeEnum, AlarmItemEnum alarmItemEnum, int currentValue) {

		/** 通过clientId/alarmType/alarmItem获取监控信息 */
		int clientId = RequestHolder.getCurrentClient().getId();
		Alarm alarm = alarmDao.getAlarm(clientId, alarmTypeEnum.getName(), alarmItemEnum.getName());
		if (alarm == null) {
			return new ResultMessage<Object>(-205, "clientId:" + clientId + " is no alarm item");
		}

		/** 获取报警方式的列表 */
		List<String> alarmModeNameSet = alarmModeDao.getAlarmModeByAlarmId(alarm.getId());
		if (alarmModeNameSet == null || alarmModeNameSet.size() == 0) {
			return new ResultMessage<Object>(-206, "clientId:" + clientId + " is no alarm mode");
		}

		/** 根据monitorAlarmId获取monitorMode集合,目前只支持邮件方式 */
		for (String alarmModeName : alarmModeNameSet) {
			String message = getMessage(alarm, currentValue);
			String destination = getDestination(alarmModeName);
			getNotifyAlarmService(alarmModeName).alarm(destination, message);
		}
		return ResultMessage.SUCCESS;
	}

	private String getDestination(String alarmModeName) {
		if (AlarmModeEnum.email.name().equalsIgnoreCase(alarmModeName)) {
			return RequestHolder.getCurrentUser().getAlarmEmail();
		}

		return RequestHolder.getCurrentUser().getAlarmPhone();
	}

	private String getMessage(Alarm alarm, int currentValue) {
		if (alarm.getAlarmItem().equals(AlarmItemEnum.CPU.name())) {
			return new StringBuffer(alarm.getAlarmType()).append(" not ok").toString();
		}

		return new StringBuffer(alarm.getAlarmType()).append(":").append(alarm.getAlarmItem()).append(",current value:").append(currentValue).toString();
	}

	private NotifyAlarmService getNotifyAlarmService(String model) {
		NotifyAlarmService notifyAlarmService = notifyAlarmServiceMap.get(model);

		if (notifyAlarmService == null) {
			return notifyAlarmServiceMap.get("default");
		}

		return notifyAlarmService;
	}

	private Map<String, NotifyAlarmService> notifyAlarmServiceMap;

	private AlarmModeDao alarmModeDao;

	private AlarmDao alarmDao;

	public void setAlarmModeDao(AlarmModeDao alarmModeDao) {
		this.alarmModeDao = alarmModeDao;
	}

	public void setAlarmDao(AlarmDao alarmDao) {
		this.alarmDao = alarmDao;
	}

	public void setNotifyAlarmServiceMap(Map<String, NotifyAlarmService> notifyAlarmServiceMap) {
		this.notifyAlarmServiceMap = notifyAlarmServiceMap;
	}
}
