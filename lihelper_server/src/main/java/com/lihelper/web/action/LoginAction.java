package com.lihelper.web.action;

import com.lihelper.constant.Constants;
import com.lihelper.model.User;
import com.lihelper.service.UserService;
import com.lihelper.util.MD5Util;
import com.lihelper.util.ParameterUtil;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

public class LoginAction extends ActionSupport {

	/**
	 * 
	 */
	private static final long serialVersionUID = -80784619639078775L;

	public String execute() {
		String email = ParameterUtil.getParameterStringValue(Constants.EMAIL);
		String password = ParameterUtil.getParameterStringValue(Constants.PASSWORD);
		String md5Password = MD5Util.md5(password);

		User user = userService.getUserByEmail(email);
		if (user == null) {
			return ERROR;
		}

		if (!md5Password.equals(user.getPassword())) {
			return ERROR;
		}

		// 保存session
		ActionContext actionContext = ActionContext.getContext();
		actionContext.getSession().put(Constants.LIHELPER_SESSION_USER, user);

		return SUCCESS;
	}

	private UserService userService;

	public void setUserService(UserService userService) {
		this.userService = userService;
	}

	private static final String ERROR = "error";
	private static final String SUCCESS = "success";
}
