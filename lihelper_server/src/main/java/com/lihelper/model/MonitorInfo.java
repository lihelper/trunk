package com.lihelper.model;

import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;

public class MonitorInfo implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -1628744848350336048L;

	private double cpuUsage;
	
	private double memUsage;
	
	private Map<String,String> nio = new HashMap<String,String>();

	private long timestamp;
	
	public double getCpuUsage() {
		return cpuUsage;
	}

	public void setCpuUsage(double cpuUsage) {
		this.cpuUsage = cpuUsage;
	}

	public double getMemUsage() {
		return memUsage;
	}

	public void setMemUsage(double memUsage) {
		this.memUsage = memUsage;
	}

	public Map<String, String> getNio() {
		return nio;
	}

	public void setNio(Map<String, String> nio) {
		this.nio = nio;
	}

	public long getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(long timestamp) {
		this.timestamp = timestamp;
	}
	
}
