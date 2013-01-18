package com.lihelper.http.endpoint;

public interface OnResponse {

	void onResponse(int status, byte[] responseContent);

	void onChunk(byte[] chunk);

	void onException(Throwable x);

}
