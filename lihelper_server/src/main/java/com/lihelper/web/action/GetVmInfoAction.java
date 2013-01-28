package com.lihelper.web.action;

import org.apache.struts2.ServletActionContext;

import com.lihelper.constant.Constants;
import com.lihelper.service.ClientService;
import com.lihelper.util.ParameterUtil;
import com.lihelper.util.StackUtil;
import com.opensymphony.xwork2.ActionSupport;

public class GetVmInfoAction extends ActionSupport {
	private final static long serialVersionUID = 201028793245689341L;

	public String execute() {

		int clientId = ParameterUtil.getParameterIntValue(Constants.CLIENT_ID);

		/** 调用client获取详细信息 */
		String result = clientService.getClientInfoInRemote(clientId);

		StackUtil.setResult(ServletActionContext.getContext().getValueStack(), result);
		return Constants.ACTION_JSON_RESULT;
	}

	private ClientService clientService;

	public void setClientService(ClientService clientService) {
		this.clientService = clientService;
	}
}
