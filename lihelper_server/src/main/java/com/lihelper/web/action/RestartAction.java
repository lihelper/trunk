package com.lihelper.web.action;

import com.lihelper.constant.Constants;
import com.lihelper.model.ResultMessage;
import com.lihelper.service.ClientService;
import com.lihelper.util.ParameterUtil;
import com.opensymphony.xwork2.ActionSupport;

public class RestartAction extends ActionSupport {

	private final static long serialVersionUID = 5626018821811216840L;

	public String execute() {

		int clientId = ParameterUtil
				.getParameterIntValue(Constants.CLIENT_ID);

		ResultMessage<Object> reqResult = clientService.restart(clientId);

		if (reqResult.isSuccess()) {
			return Constants.ACTION_RESTART_SUCCESS;
		}

		return Constants.ACTION_RESTART_FAILURE;
	}

	private ClientService clientService;

	public void setClientService(ClientService clientService) {
		this.clientService = clientService;
	}

}
