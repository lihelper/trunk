package com.lihelper.dao;

import com.lihelper.model.dataobject.UserDO;

public interface UserDao {
	/**
	 * 根据email获取用户信息
	 * @param email
	 * @return
	 */
	public UserDO getUser(String email);
}
