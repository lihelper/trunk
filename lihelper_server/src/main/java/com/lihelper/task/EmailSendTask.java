package com.lihelper.task;

import org.apache.log4j.Logger;

import com.lihelper.mail.Mail;
import com.lihelper.mail.MailSender;

/**
 * @author peng.sunp
 * 
 */
public class EmailSendTask implements Runnable {

	private static final Logger logger = Logger.getLogger(EmailSendTask.class);

	private MailSender emailSender;
	private Mail email;

	public EmailSendTask(MailSender emailSender, Mail email) {
		this.emailSender = emailSender;
		this.email = email;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see java.lang.Runnable#run()
	 */
	@Override
	public void run() {
		try {
			emailSender.send(this.email);
		} catch (Exception e) {
			logger.error("发送邮件发生错误: ", e);
		}
	}

}
