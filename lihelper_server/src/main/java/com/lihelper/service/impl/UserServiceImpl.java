package com.lihelper.service.impl;

import com.lihelper.dao.UserDao;
import com.lihelper.model.User;
import com.lihelper.service.UserService;

public class UserServiceImpl implements UserService {

	@Override
	public User getUserByEmail(String email) {
		return userDao.getUserByEmail(email);
	}

	@Override
	public User getUserByAccessId(String accessId) {
		return userDao.getUserByAccessId(accessId);
	}

	private UserDao userDao;

	public void setUserDao(UserDao userDao) {
		this.userDao = userDao;
	}
}
