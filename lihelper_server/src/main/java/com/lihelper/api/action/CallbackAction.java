package com.lihelper.api.action;

import org.apache.struts2.ServletActionContext;

import com.lihelper.constant.Constants;
import com.lihelper.model.AlarmItemEnum;
import com.lihelper.model.AlarmTypeEnum;
import com.lihelper.model.ResultMessage;
import com.lihelper.service.NotifyAlarmDistributeService;
import com.lihelper.util.ParameterUtil;
import com.lihelper.util.StackUtil;
import com.opensymphony.xwork2.ActionSupport;

public class CallbackAction extends ActionSupport {

	private final static long serialVersionUID = 5626018821811216840L;

	public String execute() {
		String method = ParameterUtil.getParameterStringValue(Constants.METHOD);

		ResultMessage<?> result = null;
		if (Constants.METHOD_CALLBACK_NOTIFY_ALARM.equals(method)) {
			result = notifyAlarm();
		}

		StackUtil.setResult(ServletActionContext.getContext().getValueStack(), result);
		return SUCCESS;
	}

	public ResultMessage<?> notifyAlarm() {

		String alarmTypeName = ParameterUtil.getParameterStringValue(Constants.ALARM_TYPE);
		String alarmItemName = ParameterUtil.getParameterStringValue(Constants.ALARM_ITEM);
		int currentValue = Integer.valueOf(ParameterUtil.getParameterIntValue(Constants.CURRENT_VALUE));

		AlarmTypeEnum alarmTypeEnum = AlarmTypeEnum.getAlarmTypeEnum(alarmTypeName);
		AlarmItemEnum alarmItemEnum = AlarmItemEnum.getAlarmItemEnum(alarmItemName);

		return notifyAlarmDistributeService.alarm(alarmTypeEnum, alarmItemEnum, currentValue);
	}

	private NotifyAlarmDistributeService notifyAlarmDistributeService;

	public void setNotifyAlarmDistributeService(NotifyAlarmDistributeService notifyAlarmDistributeService) {
		this.notifyAlarmDistributeService = notifyAlarmDistributeService;
	}
}
