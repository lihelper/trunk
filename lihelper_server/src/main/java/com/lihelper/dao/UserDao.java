package com.lihelper.dao;

import com.lihelper.model.User;

public interface UserDao {
	/**
	 * 根据email获取用户信息
	 * @param email
	 * @return
	 */
	public User getUserByEmail(String email);
	
	public User getUserByAccessId(String accessId);
}
