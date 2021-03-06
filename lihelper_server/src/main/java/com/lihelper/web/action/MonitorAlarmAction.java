package com.lihelper.web.action;

import org.apache.struts2.ServletActionContext;

import com.lihelper.constant.Constants;
import com.lihelper.model.AlarmItemEnum;
import com.lihelper.model.AlarmTypeEnum;
import com.lihelper.model.ResultMessage;
import com.lihelper.service.ClientService;
import com.lihelper.util.ParameterUtil;
import com.lihelper.util.StackUtil;
import com.opensymphony.xwork2.ActionSupport;

public class MonitorAlarmAction extends ActionSupport {

	private final static long serialVersionUID = -7318873585201820884L;

	public String execute() {

		int clientId = ParameterUtil.getParameterIntValue(Constants.CLIENT_ID);
		String alarmType = ParameterUtil.getParameterStringValue(Constants.ALARM_TYPE);
		String alarmItem = ParameterUtil.getParameterStringValue(Constants.ALARM_ITEM);
		int alarmValue = ParameterUtil.getParameterIntValue(Constants.ALARM_VALUE);
		String[] alarmModeNames = ParameterUtil.getParameterListValue(Constants.ALARM_MODE);

		AlarmTypeEnum alarmTypeEnum = AlarmTypeEnum.getAlarmTypeEnum(alarmType);
		AlarmItemEnum alarmItemEnum = AlarmItemEnum.getAlarmItemEnum(alarmItem);

		ResultMessage<Object> reqResult = new ResultMessage<Object>();

		reqResult = clientService.monitorAlarm(clientId, alarmTypeEnum, alarmItemEnum, alarmModeNames, alarmValue);

		String jsonResult = "{\"code\":-1}";
		if (reqResult.isSuccess()) {
			jsonResult = "{\"code\":200}";
		}

		StackUtil.setResult(ServletActionContext.getContext().getValueStack(), jsonResult);
		return Constants.ACTION_JSON_RESULT;
	}

	private ClientService clientService;

	public void setClientService(ClientService clientService) {
		this.clientService = clientService;
	}

}
