package com.lihelper.web.action;

import com.lihelper.constant.Constants;
import com.lihelper.model.User;
import com.lihelper.service.UserService;
import com.lihelper.util.CacheUtil;
import com.lihelper.util.CookieUtil;
import com.lihelper.util.MD5Util;
import com.lihelper.util.ParameterUtil;
import com.opensymphony.xwork2.ActionSupport;

public class LoginAction extends ActionSupport {

	/**
	 * 
	 */
	private static final long serialVersionUID = -80784619639078775L;

	public String execute() {
		String email = ParameterUtil.getParameterStringValue(Constants.EMAIL);
		String password = ParameterUtil
				.getParameterStringValue(Constants.PASSWORD);
		String md5Password = MD5Util.md5(password);

		User user = userService.getUserByEmail(email);
		if (user == null) {
			return USER_NOT_FOUND;
		}

		if (!user.getPassword().equals(md5Password)) {
			return INVAILD_PASSWORD;
		}

		cookieId = CookieUtil.generateCookieId(email);
		CacheUtil.putCache(cookieId, user);

		return LOGIN_SUCCESS;
	}

	private UserService userService;

	public void setUserService(UserService userService) {
		this.userService = userService;
	}

	private String cookieId;

	public String getCookieId() {
		return cookieId;
	}

	private static final String USER_NOT_FOUND = "UserNotFound";
	private static final String INVAILD_PASSWORD = "InvalidPassword";
	private static final String LOGIN_SUCCESS = "LoginSuccess";
}
