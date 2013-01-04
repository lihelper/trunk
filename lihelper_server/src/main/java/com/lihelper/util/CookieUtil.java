package com.lihelper.util;

public class CookieUtil {

	/**
	 * 
	 * @param email
	 * @return
	 */
	public static String generateCookieId(String email) {
		String source = new StringBuffer(email).append(
				System.currentTimeMillis()).toString();

		return MD5Util.md5(source);
	}
}
