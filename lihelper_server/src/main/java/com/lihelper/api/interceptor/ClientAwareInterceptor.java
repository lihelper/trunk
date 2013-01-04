package com.lihelper.api.interceptor;

import org.apache.struts2.ServletActionContext;

import com.lihelper.model.BasicClient;
import com.lihelper.model.RequestHolder;
import com.lihelper.model.ResultMessage;
import com.lihelper.service.ClientService;
import com.lihelper.util.StackUtil;
import com.opensymphony.xwork2.ActionInvocation;
import com.opensymphony.xwork2.interceptor.Interceptor;

public class ClientAwareInterceptor implements Interceptor {

	/**
	 * 
	 */
	private static final long serialVersionUID = 5953741870909324073L;

	private ClientService clientService;

	@Override
	public void destroy() {
	}

	@Override
	public void init() {
	}

	@Override
	public String intercept(ActionInvocation invocation) throws Exception {
		String host = ServletActionContext.getRequest().getRemoteAddr();
		BasicClient client = clientService.getClientInfoInDb(host);
		if (client == null) {
			ResultMessage<Object> result = new ResultMessage<Object>(-200, "host not exist");

			StackUtil.setResult(ServletActionContext.getContext().getValueStack(), result);
			throw new Exception("host:" + host + " not exist");
		}
		RequestHolder.setCurrentClient(client);
		return invocation.invoke();
	}

	public void setClientService(ClientService clientService) {
		this.clientService = clientService;
	}
}
