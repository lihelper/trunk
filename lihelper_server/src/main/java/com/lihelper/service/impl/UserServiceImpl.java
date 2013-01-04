package com.lihelper.service.impl;

import org.springframework.dao.DataAccessException;

import com.lihelper.dao.UserDao;
import com.lihelper.model.ResultMessage;
import com.lihelper.model.User;
import com.lihelper.service.UserService;
import com.lihelper.util.CacheUtil;
import com.lihelper.util.CookieUtil;

public class UserServiceImpl implements UserService {

	@Override
	public User getUserByEmail(String email) {
		return userDao.getUserByEmail(email);
	}

	@Override
	public User getUserByAccessId(String accessId) {
		return userDao.getUserByAccessId(accessId);
	}

	@Override
	public ResultMessage<Object> register(String email, String md5pwd) {

		/** 初始返回值对象 */
		ResultMessage<Object> result = new ResultMessage<Object>();

		/** 添加用户信息 */
		try {
			userDao.insert(email, md5pwd);
		} catch (DataAccessException e) {

			result.setCode(-101);
			result.setMsg("email has exist");
			return result;
		}

		/** 注册成功之后,将cookieId添加到cache中 */
		User user = getUserByEmail(email);

		String cookieId = CookieUtil.generateCookieId(email);
		CacheUtil.putCache(cookieId, user);

		result.setCode(200);
		result.setMsg("successful");
		return result;
	}

	private UserDao userDao;

	public void setUserDao(UserDao userDao) {
		this.userDao = userDao;
	}

}
