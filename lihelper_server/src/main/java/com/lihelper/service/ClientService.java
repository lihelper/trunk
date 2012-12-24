package com.lihelper.service;

import com.lihelper.model.viewobject.ClientVO;

public interface ClientService {
	/**
	 * 
	 * @param host
	 * @return
	 */
	public ClientVO getClientByHost(String host);
}
