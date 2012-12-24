/**
 * 
 */
package com.lihelper.model;

import com.lihelper.model.viewobject.ClientVO;
import com.lihelper.model.viewobject.UserVO;

public class Holder {

	private static final ThreadLocal<ClientVO> currentClientLocal = new ThreadLocal<ClientVO>();
	private static final ThreadLocal<UserVO> currentUserLocal = new ThreadLocal<UserVO>();

	public static void setCurrentClient(ClientVO client) {
		currentClientLocal.set(client);
	}

	public static ClientVO getCurrentClient() {
		return currentClientLocal.get();
	}

	public static void clearCurrentClient() {
		currentClientLocal.remove();
	}
	
	public static void setCurrentUser(UserVO user) {
		currentUserLocal.set(user);
	}

	public static UserVO getCurrentUser() {
		return currentUserLocal.get();
	}

	public static void clearCurrentUser() {
		currentUserLocal.remove();
	}
}
