package com.lihelper.service;

import com.lihelper.model.viewobject.UserVO;

public interface UserService {
	public UserVO getUserByEmail(String email);

	public UserVO getUserByAccessId(String accessId);
}
