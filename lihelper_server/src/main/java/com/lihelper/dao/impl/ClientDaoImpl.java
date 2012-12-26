package com.lihelper.dao.impl;

import org.springframework.orm.ibatis.SqlMapClientOperations;

import com.lihelper.dao.ClientDao;
import com.lihelper.model.BasicClient;

public class ClientDaoImpl implements ClientDao {

	@Override
	public BasicClient getClientById(Integer clientId) {
		return (BasicClient) sqlMapTemplate.queryForObject("client.getClientById",
				clientId);
	}

	@Override
	public BasicClient getClientByHost(String host) {
		return (BasicClient) sqlMapTemplate.queryForObject(
				"client.getClientByHost", host);
	}

	private SqlMapClientOperations sqlMapTemplate;

	public void setSqlMapTemplate(SqlMapClientOperations sqlMapTemplate) {
		this.sqlMapTemplate = sqlMapTemplate;
	}
}
