package com.lihelper.action;

import javax.servlet.http.HttpServletRequest;

import org.apache.struts2.ServletActionContext;

import com.lihelper.model.ResultMessage;
import com.opensymphony.xwork2.ActionSupport;

public class ProxyAction extends ActionSupport {
	private static final long serialVersionUID = 201028793245689341L;
	
	public String execute() {
		
		HttpServletRequest request = ServletActionContext.getRequest();
		String action = request.getParameter("method");
		
		ExecuteAction executeAction = executeActionFactory.getExecuteAction(action);
		ResultMessage result = executeAction.doExecute();
		ServletActionContext.getContext().getValueStack().set("_result", result);
		return SUCCESS;
	}

	private ExecuteActionFactory executeActionFactory;

	public ExecuteActionFactory getExecuteActionFactory() {
		return executeActionFactory;
	}

	public void setExecuteActionFactory(
			ExecuteActionFactory executeActionFactory) {
		this.executeActionFactory = executeActionFactory;
	}

}

