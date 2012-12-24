package com.lihelper.interceptor;

import org.apache.struts2.ServletActionContext;

import com.lihelper.model.Holder;
import com.lihelper.model.ResultMessage;
import com.lihelper.model.viewobject.UserVO;
import com.lihelper.service.UserService;
import com.lihelper.util.ParameterUtil;
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
		String accessId = ParameterUtil.getParameterValue("access_id");
		UserVO user = userService.getUserByAccessId(accessId);
		
		if (user == null) {
			ResultMessage result = new ResultMessage(-200, "accessId not exist");
			ServletActionContext.getContext().getValueStack()
					.set("_result", result);
			throw new Exception("accessId:" + accessId + " not exist");
		}
		Holder.setCurrentUser(user);
		return invocation.invoke();
	}
}
