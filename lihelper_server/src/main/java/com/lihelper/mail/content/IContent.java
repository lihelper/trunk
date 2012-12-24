package com.lihelper.mail.content;

import java.io.Serializable;

import javax.mail.MessagingException;
import javax.mail.internet.MimePart;

public interface IContent extends Serializable{

	void render(MimePart part, String defaultCharset) throws MessagingException;
	
}
