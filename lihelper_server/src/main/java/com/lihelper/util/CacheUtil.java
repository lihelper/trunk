package com.lihelper.util;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * cache工具类，支持多线程
 * 
 * @author yongsheng.fangys
 * 
 */
public class CacheUtil {

	private static Map<String, Object> cache = new ConcurrentHashMap<String, Object>();

	/**
	 * 
	 * @param key
	 * @return
	 */
	public static Object getCache(String key) {
		if (key == null) {
			return null;
		}
		return cache.get(key);
	}

	/**
	 * 
	 * @param key
	 * @param value
	 */
	public static void putCache(String key, Object value) {
		cache.put(key, value);
	}

}
