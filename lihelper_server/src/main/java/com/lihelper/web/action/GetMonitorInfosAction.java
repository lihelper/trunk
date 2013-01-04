package com.lihelper.web.action;

import org.apache.struts2.ServletActionContext;

import com.lihelper.constant.Constants;
import com.lihelper.model.MonitorTypeEnum;
import com.lihelper.service.ClientService;
import com.lihelper.util.ParameterUtil;
import com.opensymphony.xwork2.ActionSupport;

public class GetMonitorInfosAction extends ActionSupport {
	private final static long serialVersionUID = 201028793245689341L;

	public String execute() {
		int clientId = ParameterUtil.getParameterIntValue(Constants.CLIENT_ID);
		String begin = ParameterUtil.getParameterStringValue(Constants.BEGIN);
		String end = ParameterUtil.getParameterStringValue(Constants.END);
		String monitorTypeName = ParameterUtil
				.getParameterStringValue(Constants.MONITOR_TYPE);

		MonitorTypeEnum monitorTypeEnum = MonitorTypeEnum
				.getMonitorTypeEnum(monitorTypeName);
		String result = null;

		if (monitorTypeEnum == MonitorTypeEnum.Network) {
			String nio = ParameterUtil.getParameterStringValue(Constants.NIO);

			result = clientService.getMonitorInfosInRemote(clientId, begin,
					end, monitorTypeEnum, nio);
		} else {
			result = clientService.getMonitorInfosInRemote(clientId, begin,
					end, monitorTypeEnum);
		}

		ServletActionContext.getContext().getValueStack()
				.set("_result", result);
		return Constants.ACTION_JSON_RESULT;
	}

	private ClientService clientService;

	public void setClientService(ClientService clientService) {
		this.clientService = clientService;
	}
}
