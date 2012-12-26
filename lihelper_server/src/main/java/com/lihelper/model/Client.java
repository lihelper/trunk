package com.lihelper.model;

import java.util.List;


public class Client extends BasicClient {

	/**
	 * 
	 */
	private static final long serialVersionUID = 6215567797243853331L;
	private String uptime;
	private String kernel;
	private String osType;
	private String release;
	private List<Network> networks;

	public String getUptime() {
		return uptime;
	}

	public void setUptime(String uptime) {
		this.uptime = uptime;
	}

	public String getKernel() {
		return kernel;
	}

	public void setKernel(String kernel) {
		this.kernel = kernel;
	}

	public String getOsType() {
		return osType;
	}

	public void setOsType(String osType) {
		this.osType = osType;
	}

	public String getRelease() {
		return release;
	}

	public void setRelease(String release) {
		this.release = release;
	}

	public List<Network> getNetworks() {
		return networks;
	}

	public void setNetworks(List<Network> networks) {
		this.networks = networks;
	}
}
