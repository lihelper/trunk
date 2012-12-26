package com.lihelper.dao.impl;

import org.springframework.orm.ibatis.SqlMapClientOperations;

import com.lihelper.dao.UserDao;
import com.lihelper.model.User;

public class UserDaoImpl implements UserDao {

	@Override
	public User getUserByEmail(String email) {
		return (User)sqlMapTemplate.queryForObject("user.getUserByEmail", email);
	}

	@Override
	public User getUserByAccessId(String accessId) {
		return (User)sqlMapTemplate.queryForObject("user.getUserByAccessId", accessId);
	}
	
	private SqlMapClientOperations sqlMapTemplate;
	
	public void setSqlMapTemplate(SqlMapClientOperations sqlMapTemplate) {
		this.sqlMapTemplate = sqlMapTemplate;
	}
}
