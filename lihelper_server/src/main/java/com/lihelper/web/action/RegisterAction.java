package com.lihelper.web.action;

import com.lihelper.constant.Constants;
import com.lihelper.model.ResultMessage;
import com.lihelper.service.UserService;
import com.lihelper.util.MD5Util;
import com.lihelper.util.ParameterUtil;
import com.opensymphony.xwork2.ActionSupport;

public class RegisterAction extends ActionSupport {

	/**
	 * 
	 */
	private static final long serialVersionUID = -80784619639078775L;

	public String execute() {
		String email = ParameterUtil.getParameterStringValue(Constants.EMAIL);
		String password = ParameterUtil.getParameterStringValue(Constants.PASSWORD);
		String md5pwd = MD5Util.md5(password);

		ResultMessage<Object> result = userService.register(email, md5pwd);
		if (result.isSuccess()) {
			this.msg = "用户注册成功";
			return REGISTER_SUCCESS;
		}

		if (result.getCode() == -101) {
			this.msg = "email已经存在，请重新注册";
		}

		if (result.getCode() == -102) {
			this.msg = "用户注册失败,请重试!";
		}

		return REGISTER_FAILURE;
	}

	private UserService userService;

	public void setUserService(UserService userService) {
		this.userService = userService;
	}

	/** view层展现 */
	private String msg;

	public String getMsg() {
		return msg;
	}

	private static final String REGISTER_SUCCESS = "RegisterSuccess";

	private static final String REGISTER_FAILURE = "RegisterFailure";
}
