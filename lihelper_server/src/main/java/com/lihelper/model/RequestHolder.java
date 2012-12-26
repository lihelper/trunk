/**
 * 
 */
package com.lihelper.model;


public class RequestHolder {

	private static final ThreadLocal<BasicClient> currentClientLocal = new ThreadLocal<BasicClient>();
	private static final ThreadLocal<User> currentUserLocal = new ThreadLocal<User>();

	public static void setCurrentClient(BasicClient client) {
		currentClientLocal.set(client);
	}

	public static BasicClient getCurrentClient() {
		return currentClientLocal.get();
	}

	public static void clearCurrentClient() {
		currentClientLocal.remove();
	}
	
	public static void setCurrentUser(User user) {
		currentUserLocal.set(user);
	}

	public static User getCurrentUser() {
		return currentUserLocal.get();
	}

	public static void clearCurrentUser() {
		currentUserLocal.remove();
	}
}
