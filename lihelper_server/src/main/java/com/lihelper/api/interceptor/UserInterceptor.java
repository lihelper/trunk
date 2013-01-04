package com.lihelper.api.interceptor;

import org.apache.struts2.ServletActionContext;

import com.lihelper.constant.Constants;
import com.lihelper.model.RequestHolder;
import com.lihelper.model.ResultMessage;
import com.lihelper.model.User;
import com.lihelper.service.UserService;
import com.lihelper.util.ParameterUtil;
import com.lihelper.util.StackUtil;
import com.opensymphony.xwork2.ActionInvocation;
import com.opensymphony.xwork2.interceptor.Interceptor;

public class UserInterceptor implements Interceptor {

	/**
	 * 
	 */
	private static final long serialVersionUID = 5953741870909324073L;

	private UserService userService;

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
		String accessId = ParameterUtil.getParameterStringValue(Constants.ACCESS_ID);
		User user = userService.getUserByAccessId(accessId);

		if (user == null) {
			ResultMessage<Object> result = new ResultMessage<Object>(-200, "accessId not exist");

			StackUtil.setResult(ServletActionContext.getContext().getValueStack(), result);
			throw new Exception("accessId:" + accessId + " not exist");
		}
		RequestHolder.setCurrentUser(user);
		return invocation.invoke();
	}

	public void setUserService(UserService userService) {
		this.userService = userService;
	}
}
