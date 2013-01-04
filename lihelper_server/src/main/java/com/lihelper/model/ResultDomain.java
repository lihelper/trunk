package com.lihelper.model;

import java.io.Serializable;

public class ResultDomain implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 7994011602697162301L;

	private int code;

	private String message;

	public ResultDomain(ResultMessage<?> resultMessage) {
		this.code = resultMessage.getCode();
		this.message = resultMessage.getMsg();
	}

	public int getCode() {
		return code;
	}

	public void setCode(int code) {
		this.code = code;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
}
