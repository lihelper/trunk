package com.lihelper.http.endpoint;

import java.io.IOException;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.TimeUnit;

import org.eclipse.jetty.client.Address;
import org.eclipse.jetty.client.ContentExchange;
import org.eclipse.jetty.client.HttpClient;
import org.eclipse.jetty.client.HttpExchange;
import org.eclipse.jetty.http.HttpHeaderValues;
import org.eclipse.jetty.http.HttpHeaders;
import org.eclipse.jetty.http.HttpMethods;
import org.eclipse.jetty.http.HttpSchemes;
import org.eclipse.jetty.http.HttpVersions;
import org.eclipse.jetty.io.Buffer;
import org.eclipse.jetty.util.thread.QueuedThreadPool;

public class JettyHttpEndPoint implements HttpEndPoint {

	private static final long DEFAULT_TIMEOUT = 640000;
	private HttpClient client;

	boolean connectBlocking = true;

	public boolean isConnectBlocking() {
		return connectBlocking;
	}

	@Override
	public void start() {

		client = new HttpClient();
		client.setConnectorType(HttpClient.CONNECTOR_SELECT_CHANNEL);
		client.setTimeout(DEFAULT_TIMEOUT);
		client.setConnectBlocking(connectBlocking);
		client.setMaxConnectionsPerAddress(10240);
		client.setMaxQueueSizePerAddress(10240);

		QueuedThreadPool pool = new QueuedThreadPool();
		pool.setMaxThreads(64);
		pool.setDaemon(true);
		pool.setName("HttpClient");

		client.setThreadPool(pool);

		try {
			client.start();
		} catch (Exception e) {
			throw new RuntimeException(e);
		}

	}

	@Override
	public void stop() {

	}

	@Override
	public String syncCall(String serverAddress, int port, String requestURI, long timeout) {
		final CountDownLatch latch = new CountDownLatch(1);
		final ResultHolder holder = new ResultHolder();
		asyncCall(serverAddress, port, requestURI, timeout, new OnResponse() {

			@Override
			public void onResponse(int status, byte[] responseContent) {
				try {
					if (status == 200) {
						holder.result = new String(responseContent);
					} else {
						holder.result = "{\"code\":-1}";
					}
				} finally {
					latch.countDown();
				}
			}

			@Override
			public void onChunk(byte[] chunk) {
				// TODO Auto-generated method stub

			}

			@Override
			public void onException(Throwable x) {
				holder.result = "{\"code\":-1}";
				latch.countDown();
			}
		});

		try {
			boolean result = latch.await(timeout, TimeUnit.MILLISECONDS);

			if (result == false) {
				throw new RuntimeException("timeout");
			}
		} catch (InterruptedException e) {
			throw new RuntimeException(e);
		}

		return holder.result;
	}

	@Override
	public void asyncCall(String serverAddress, int port, String requestURI, long timeout, final OnResponse onResponse) {
		if (onResponse == null) {
			throw new IllegalArgumentException("onResponse can't be null!");
		}

		if (requestURI == null || requestURI.length() == 0) {
			throw new IllegalArgumentException("onResponse can't be null!");
		}

		HttpExchange exchange = new ContentExchange() {

			private int status;

			@Override
			protected void onConnectionFailed(Throwable x) {

				onResponse.onException(x);
			}

			@Override
			protected synchronized void onResponseStatus(Buffer version, int status, Buffer reason) throws IOException {
				this.status = status;
			}

			@Override
			protected void onExpire() {
				onResponse.onException(new RuntimeException("http timeout"));
			}

			@Override
			protected void onResponseComplete() throws IOException {
				onResponse.onResponse(status, getResponseContentBytes());
			}

			@Override
			protected void onException(Throwable x) {
				onResponse.onException(x);
			}

		};

		exchange.setScheme(HttpSchemes.HTTP);
		exchange.setVersion(HttpVersions.HTTP_1_1);
		exchange.setMethod(HttpMethods.GET);
		exchange.setAddress(new Address(serverAddress, port));
		exchange.setTimeout(timeout / 1000);

		exchange.setRequestURI(requestURI);

		exchange.setRequestHeader(HttpHeaders.HOST, "*");
		exchange.setRequestHeader(HttpHeaders.CONNECTION, HttpHeaderValues.KEEP_ALIVE);

		try {
			client.send(exchange);
		} catch (IOException e) {
			throw new RuntimeException(e);
		}
	}

	public static void main(String[] args) {
		JettyHttpEndPoint endPoint = new JettyHttpEndPoint();
		endPoint.start();

		System.out.println(endPoint.syncCall("server.zol.com.cn", 80, "/manu_21.shtml", 6000));
	}
}
