package com.lihelper.dao;

import com.lihelper.model.User;

public interface UserDao {
	/**
	 * 根据email获取用户信息
	 * 
	 * @param email
	 * @return
	 */
	public User getUserByEmail(String email);

	/**
	 * 根据accessId获取用户信息
	 * 
	 * @param accessId
	 * @return
	 */
	public User getUserByAccessId(String accessId);

	public void insert(String email, String md5pwd);
}
