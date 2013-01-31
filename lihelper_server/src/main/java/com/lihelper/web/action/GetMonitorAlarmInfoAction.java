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

public class GetMonitorAlarmInfoAction extends ActionSupport {

	private final static long serialVersionUID = -7318873585201820884L;

	public String execute() {

		int clientId = ParameterUtil.getParameterIntValue(Constants.CLIENT_ID);
		String alarmType = ParameterUtil.getParameterStringValue(Constants.ALARM_TYPE);
		String alarmItem = ParameterUtil.getParameterStringValue(Constants.ALARM_ITEM);

		AlarmTypeEnum alarmTypeEnum = AlarmTypeEnum.getAlarmTypeEnum(alarmType);
		AlarmItemEnum alarmItemEnum = AlarmItemEnum.getAlarmItemEnum(alarmItem);

		ResultMessage<Object> reqResult = clientService.getMonitorAlarmInfo(clientId, alarmTypeEnum, alarmItemEnum);

		if (reqResult != null && reqResult.isSuccess()) {
			StackUtil.setResult(ServletActionContext.getContext().getValueStack(), reqResult);
		} else {
			StackUtil.setResult(ServletActionContext.getContext().getValueStack(), Constants.JSON_ERROR_RESULT);
		}

		return Constants.ACTION_JSON_RESULT;
	}

	private ClientService clientService;

	public void setClientService(ClientService clientService) {
		this.clientService = clientService;
	}

}
