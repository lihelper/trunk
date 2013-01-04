package com.lihelper.web.interceptor;

import com.lihelper.constant.Constants;
import com.lihelper.model.RequestHolder;
import com.lihelper.model.User;
import com.lihelper.util.CacheUtil;
import com.lihelper.util.ParameterUtil;
import com.opensymphony.xwork2.ActionInvocation;
import com.opensymphony.xwork2.interceptor.Interceptor;

public class AuthorizationInterceptor implements Interceptor {

	/**
	 * 
	 */
	private static final long serialVersionUID = 5953741870909324073L;

	@Override
	public void destroy() {
	}

	@Override
	public void init() {
	}

	@Override
	public String intercept(ActionInvocation invocation) throws Exception {
		String cookieId = ParameterUtil
				.getParameterStringValue(Constants.COOKIE_ID);
		Object obj = CacheUtil.getCache(cookieId);

		if (obj == null) {
			return LOGIN;
		}

		RequestHolder.setCurrentUser((User) obj);

		return invocation.invoke();
	}

	private static final String LOGIN = "Login";
}