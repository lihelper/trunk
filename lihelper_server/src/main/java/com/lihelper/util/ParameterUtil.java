package com.lihelper.util;

import java.util.Map;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionContext;

public class ParameterUtil {
	public static String getParameterValue(String key) {
		ActionContext ac = ServletActionContext.getContext();
		Map<String, Object> params = ac.getParameters();
		if (params == null) {
			return null;
		}
		Object value = params.get(key);
		return value == null ? null : (String) value;
	}
}
