package com.lihelper.service;

public interface EmailService {
	 /**
	  * 
	  * @param email
	  * @param subject
	  * @param content
	  */
	public void sendEmail(String email, String subject, String content) throws Exception;
}
