package com.lihelper.dao.impl;

import org.springframework.orm.ibatis.SqlMapClientOperations;

import com.lihelper.dao.UserDao;
import com.lihelper.model.dataobject.UserDO;

public class UserDaoImpl implements UserDao {

	@Override
	public UserDO getUser(String email) {
		return (UserDO)sqlMapTemplate.queryForObject("user.getUserByEmail", email);
	}

	private SqlMapClientOperations sqlMapTemplate;
	
	public void setSqlMapTemplate(SqlMapClientOperations sqlMapTemplate) {
		this.sqlMapTemplate = sqlMapTemplate;
	}
}
