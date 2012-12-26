package com.lihelper.service;

import com.lihelper.model.BasicClient;
import com.lihelper.model.Client;

public interface ClientService {
	
	/**
	 * 从数据库中获取基本信息
	 * @param host
	 * @return
	 */
	public BasicClient getClientInfoInDb(String host);
	
	/**
	 * 从远程获取client详细信息
	 * @param clientId
	 * @return
	 */
	public Client getClientInfoInRemote(int clientId);
}
