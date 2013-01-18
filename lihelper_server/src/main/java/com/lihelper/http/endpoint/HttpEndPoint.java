package com.lihelper.http.endpoint;

public interface HttpEndPoint {

	static final class ResultHolder {
		public String result;
		public int errorCode;
	}

	String syncCall(String serverAddress, int port, String requestURI, long timeout);

	void asyncCall(String serverAddress, int port, String requestURI, long timeout, OnResponse onResponse);

	void start();

	void stop();
}
