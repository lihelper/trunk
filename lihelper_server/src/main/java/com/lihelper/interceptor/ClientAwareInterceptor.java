package com.lihelper.interceptor;

import org.apache.struts2.ServletActionContext;

import com.lihelper.model.Holder;
import com.lihelper.model.ResultMessage;
import com.lihelper.model.viewobject.ClientVO;
import com.lihelper.service.ClientService;
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
		// TODO Auto-generated method stub

	}

	@Override
	public void init() {
		// TODO Auto-generated method stub

	}

	@Override
	public String intercept(ActionInvocation invocation) throws Exception {
		String host = ServletActionContext.getRequest().getRemoteAddr();
		ClientVO client = clientService.getClientByHost(host);
		if (client == null) {
			ResultMessage result = new ResultMessage(-200, "host not exist");
			ServletActionContext.getContext().getValueStack()
					.set("_result", result);
			throw new Exception("host:" + host + " not exist");
		}
		Holder.setCurrentClient(client);
		return invocation.invoke();
	}

	public void setClientService(ClientService clientService) {
		this.clientService = clientService;
	}
}
