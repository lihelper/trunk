package com.lihelper.dao.impl;

import java.util.HashMap;
import java.util.Map;

import org.springframework.orm.ibatis.SqlMapClientOperations;

import com.lihelper.dao.UserDao;
import com.lihelper.model.User;

public class UserDaoImpl implements UserDao {

	@Override
	public User getUserByEmail(String email) {
		return (User) sqlMapTemplate.queryForObject("user.getUserByEmail", email);
	}

	@Override
	public User getUserByAccessId(String accessId) {
		return (User) sqlMapTemplate.queryForObject("user.getUserByAccessId", accessId);
	}

	@Override
	public void insert(String email, String md5pwd) {
		Map<String, String> params = new HashMap<String, String>();
		params.put("email", email);
		params.put("password", md5pwd);

		sqlMapTemplate.insert("user.insert", params);
	}

	private SqlMapClientOperations sqlMapTemplate;

	public void setSqlMapTemplate(SqlMapClientOperations sqlMapTemplate) {
		this.sqlMapTemplate = sqlMapTemplate;
	}

}
