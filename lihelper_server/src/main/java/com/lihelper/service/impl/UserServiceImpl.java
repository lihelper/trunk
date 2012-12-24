package com.lihelper.service.impl;

import com.lihelper.dao.UserDao;
import com.lihelper.model.dataobject.UserDO;
import com.lihelper.model.viewobject.UserVO;
import com.lihelper.service.UserService;

public class UserServiceImpl implements UserService {

	@Override
	public UserVO getUserByEmail(String email) {
		UserDO userDO = userDao.getUserByEmail(email);
		if (userDO != null) {
			UserVO userVO = new UserVO();
			userVO.setId(userDO.getId());
			userVO.setAccessId(userDO.getAccessId());
			userVO.setAlarmEmail(userDO.getAlarmEmail());
			userVO.setAlarmPhone(userDO.getAlarmPhone());
			userVO.setSecretKey(userDO.getSecretKey());
			userVO.setEmail(userDO.getEmail());
			return userVO;
		}
		return null;
	}

	@Override
	public UserVO getUserByAccessId(String accessId) {
		UserDO userDO = userDao.getUserByAccessId(accessId);
		if (userDO != null) {
			UserVO userVO = new UserVO();
			userVO.setId(userDO.getId());
			userVO.setAccessId(userDO.getAccessId());
			userVO.setAlarmEmail(userDO.getAlarmEmail());
			userVO.setAlarmPhone(userDO.getAlarmPhone());
			userVO.setSecretKey(userDO.getSecretKey());
			userVO.setEmail(userDO.getEmail());
			return userVO;
		}
		return null;
	}

	private UserDao userDao;

	public void setUserDao(UserDao userDao) {
		this.userDao = userDao;
	}
}
