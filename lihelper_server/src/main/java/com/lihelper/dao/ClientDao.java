package com.lihelper.dao;

import com.lihelper.model.BasicClient;

public interface ClientDao {
	/**
	 * 通过id获取信息
	 * @param clientId
	 * @return
	 */
	public BasicClient getClientById(Integer clientId);

	/**
	 * 通过host获取信息
	 * @param host
	 * @return
	 */
	public BasicClient getClientByHost(String host);
}
