package com.lihelper.model;

import java.io.Serializable;

public class Network implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 5522201404381013036L;
	private String nio;
	private String ip;

	public String getNio() {
		return nio;
	}

	public void setNio(String nio) {
		this.nio = nio;
	}

	public String getIp() {
		return ip;
	}

	public void setIp(String ip) {
		this.ip = ip;
	}
}
