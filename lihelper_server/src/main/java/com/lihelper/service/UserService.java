package com.lihelper.service;

import com.lihelper.model.ResultMessage;
import com.lihelper.model.User;

public interface UserService {

	/**
	 * 根据用户的email获取用户详细信息
	 * 
	 * @param email
	 * @return
	 */
	public User getUserByEmail(String email);

	/**
	 * 根据accessId返回用户详细信息
	 * 
	 * @param accessId
	 * @return
	 */
	public User getUserByAccessId(String accessId);

	/**
	 * 注册用户，可根据ResultMessage.getCode()判断操作成功与否
	 * 
	 * <p>
	 * -101: email注册重复 -102: 用户注册失败 200: 用户注册成功
	 * </p>
	 * 
	 * @param email
	 * @param md5Pwd
	 * @return
	 */
	public ResultMessage<Object> register(String email, String md5Pwd);
}
