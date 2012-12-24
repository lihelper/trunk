package com.lihelper.dao.impl;

import org.springframework.orm.ibatis.SqlMapClientOperations;

import com.lihelper.dao.UserDao;
import com.lihelper.model.dataobject.UserDO;

public class UserDaoImpl implements UserDao {

	@Override
	public UserDO getUserByEmail(String email) {
		return (UserDO)sqlMapTemplate.queryForObject("user.getUserByEmail", email);
	}

	@Override
	public UserDO getUserByAccessId(String accessId) {
		return (UserDO)sqlMapTemplate.queryForObject("user.getUserByAccessId", accessId);
	}
	
	private SqlMapClientOperations sqlMapTemplate;
	
	public void setSqlMapTemplate(SqlMapClientOperations sqlMapTemplate) {
		this.sqlMapTemplate = sqlMapTemplate;
	}
}
