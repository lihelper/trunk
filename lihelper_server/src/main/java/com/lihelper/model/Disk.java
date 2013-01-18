package com.lihelper.model;

import java.io.Serializable;

public class Disk implements Serializable {

	private static final long serialVersionUID = 3031407576206394515L;

	private String mount;
	private String size;

	public String getMount() {
		return mount;
	}

	public void setMount(String mount) {
		this.mount = mount;
	}

	public String getSize() {
		return size;
	}

	public void setSize(String size) {
		this.size = size;
	}
}
