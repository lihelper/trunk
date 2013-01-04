package com.lihelper.model;

import java.io.Serializable;

public final class ResultMessage<R> implements Serializable {
	private static final long serialVersionUID = 6636886028368596225L;
	public final static ResultMessage<Object> SUCCESS = new ResultMessage<Object>(
			200, "successful");
	
	private int code;
	private String msg;
	private R r;

	public ResultMessage() {

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

	public R getR() {
		return r;
	}

	public void setR(R r) {
		this.r = r;
	}

	public boolean isSuccess() {
		return code == 200;
	}
}
