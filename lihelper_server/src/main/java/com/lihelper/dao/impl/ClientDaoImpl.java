package com.lihelper.dao.impl;

import org.springframework.orm.ibatis.SqlMapClientOperations;

import com.lihelper.dao.ClientDao;
import com.lihelper.model.dataobject.ClientDO;

public class ClientDaoImpl implements ClientDao {

	@Override
	public ClientDO getClientById(Integer clientId) {
		return (ClientDO) sqlMapTemplate.queryForObject("client.getClientById",
				clientId);
	}

	@Override
	public ClientDO getClientByHost(String host) {
		return (ClientDO) sqlMapTemplate.queryForObject(
				"client.getClientByHost", host);
	}

	private SqlMapClientOperations sqlMapTemplate;

	public void setSqlMapTemplate(SqlMapClientOperations sqlMapTemplate) {
		this.sqlMapTemplate = sqlMapTemplate;
	}
}
