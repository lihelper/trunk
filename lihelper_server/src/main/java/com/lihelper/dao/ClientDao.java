package com.lihelper.dao;

import com.lihelper.model.dataobject.ClientDO;

public interface ClientDao {
	/**
	 * 通过id获取信息
	 * @param clientId
	 * @return
	 */
	public ClientDO getClientById(Integer clientId);

	/**
	 * 通过host获取信息
	 * @param host
	 * @return
	 */
	public ClientDO getClientByHost(String host);
}
