package com.lihelper.model;

import java.io.Serializable;

public final class ResultMessage implements Serializable {
	private static final long serialVersionUID = 6636886028368596225L;
	public final static ResultMessage SUCCESS = new ResultMessage(200, "success");
	private int code;
	private String msg;

	public ResultMessage(){
		
	}
	
	public ResultMessage(int code, String msg) {
		this.code = code;
		this.msg = msg;
	}

	public int getCode() {
		return code;
	}

	public void setCode(int code) {
		this.code = code;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}
}
