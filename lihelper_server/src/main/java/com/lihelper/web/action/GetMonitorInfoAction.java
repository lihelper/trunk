package com.lihelper.web.action;

import org.apache.struts2.ServletActionContext;

import com.lihelper.constant.Constants;
import com.lihelper.service.ClientService;
import com.lihelper.util.ParameterUtil;
import com.opensymphony.xwork2.ActionSupport;

public class GetMonitorInfoAction extends ActionSupport {
	private final static long serialVersionUID = 201028793245689341L;

	public String execute() {
		int clientId = ParameterUtil.getParameterIntValue(Constants.CLIENT_ID);

		String result = clientService.getMonitorInfoInRemote(clientId);

		ServletActionContext.getContext().getValueStack()
				.set("_result", result);
		return Constants.ACTION_JSON_RESULT;
	}

	private ClientService clientService;

	public void setClientService(ClientService clientService) {
		this.clientService = clientService;
	}
}
