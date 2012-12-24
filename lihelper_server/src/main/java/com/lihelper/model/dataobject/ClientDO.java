package com.lihelper.model.dataobject;

import java.io.Serializable;

public final class ClientDO implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 8659272303066804347L;
	
	private String host;
	private int cpu;
	private int mem;
	private int disk;
	private UserDO user;
	public String getHost() {
		return host;
	}
	public void setHost(String host) {
		this.host = host;
	}
	public int getCpu() {
		return cpu;
	}
	public void setCpu(int cpu) {
		this.cpu = cpu;
	}
	public int getMem() {
		return mem;
	}
	public void setMem(int mem) {
		this.mem = mem;
	}
	public int getDisk() {
		return disk;
	}
	public void setDisk(int disk) {
		this.disk = disk;
	}
	public UserDO getUser() {
		return user;
	}
	public void setUser(UserDO user) {
		this.user = user;
	}
}
