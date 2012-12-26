package com.lihelper.service;

import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.HttpMethod;
import org.apache.commons.httpclient.SimpleHttpConnectionManager;
import org.apache.commons.httpclient.methods.GetMethod;
import org.apache.commons.httpclient.params.HttpClientParams;

public class HttpClientAdapter {
	private static final String PROTOCOL = "http";
	private static final int CONNECTION_TIMEOUT = 2 * 1000;
	private static final int SO_TIMEOUT = 5 * 1000;

	private HttpClient httpClient;

	public HttpClientAdapter(String host, int port) {
		httpClient = new HttpClient(new HttpClientParams(),new SimpleHttpConnectionManager(true));
		httpClient.getHostConfiguration().setHost(host, port, PROTOCOL);
		httpClient.getHttpConnectionManager().getParams()
				.setConnectionTimeout(CONNECTION_TIMEOUT);
		httpClient.getHttpConnectionManager().getParams()
				.setSoTimeout(SO_TIMEOUT);
	}

	public String executeMethod(HttpMethod method) {
		try {
			httpClient.executeMethod(method);
			return method.getResponseBodyAsString();
		} catch (Exception e) {

		}
		return null;
	}
	
	public static void main(String[] args) {
		HttpClientAdapter adapter = new HttpClientAdapter("127.0.0.1",8080);
		HttpMethod method = new GetMethod("/LiHelper3/test.jsp");
		System.out.println(adapter.executeMethod(method));
	}
}
