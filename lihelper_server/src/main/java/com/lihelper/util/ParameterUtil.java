package com.lihelper.util;

import javax.servlet.http.HttpServletRequest;

import org.apache.struts2.ServletActionContext;

public class ParameterUtil {
	/**
	 * 
	 * @param key
	 * @return
	 */
	public static String getParameterStringValue(String key) {
		HttpServletRequest request = ServletActionContext.getRequest();
		Object value = request.getParameter(key);
		return value == null ? null : (String) value;
	}

	public static String[] getParameterListValue(String key) {
		HttpServletRequest request = ServletActionContext.getRequest();
		String[] value = request.getParameterValues(key);
		return value == null ? null : value;
	}

	public static int getParameterIntValue(String key)
			throws NumberFormatException {
		HttpServletRequest request = ServletActionContext.getRequest();

		Object value = request.getParameter(key);
		if (value == null) {
			return 0;
		}
		return Integer.valueOf((String) value);
	}
}
