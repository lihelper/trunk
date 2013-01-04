package com.lihelper.service;

import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.HttpMethod;
import org.apache.commons.httpclient.SimpleHttpConnectionManager;
import org.apache.commons.httpclient.params.HttpClientParams;
import org.apache.log4j.Logger;

/**
 * 
 * @author yongsheng.fangys
 * 
 */
public class HttpClientAdapter {

	/** Log object for this class. */
	private final static Logger logger = Logger.getLogger(HttpClientAdapter.class);
	private final static String PROTOCOL = "http";
	private final static int CONNECTION_TIMEOUT = 2 * 1000;
	private final static int SO_TIMEOUT = 5 * 1000;

	public HttpClientAdapter(String host, int port) {

		/** 设置SimepleHttpConnectionManager的连接为自动释放 */
		httpClient = new HttpClient(new HttpClientParams(), new SimpleHttpConnectionManager(true));

		/** 设置http请求的host,port,protocol */
		httpClient.getHostConfiguration().setHost(host, port, PROTOCOL);

		/** 请求连接的超时时间 */
		httpClient.getHttpConnectionManager().getParams().setConnectionTimeout(CONNECTION_TIMEOUT);

		/** socket数据等待返回的超时时间 */
		httpClient.getHttpConnectionManager().getParams().setSoTimeout(SO_TIMEOUT);
	}

	/**
	 * 发起Http请求，获取请求的返回值
	 * 
	 * @param method
	 * @return
	 */
	public String executeMethod(HttpMethod method) {
		try {
			httpClient.executeMethod(method);
			return method.getResponseBodyAsString();
		} catch (Exception e) {
			logger.error("URI:" + method.getQueryString(), e);
		}
		return null;
	}

	private HttpClient httpClient;
}
