package com.lihelper.service;

import com.lihelper.model.User;

public interface UserService {
	
	public User getUserByEmail(String email);

	public User getUserByAccessId(String accessId);
}
