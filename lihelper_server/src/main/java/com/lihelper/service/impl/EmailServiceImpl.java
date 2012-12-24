package com.lihelper.service.impl;

import java.util.Date;

import javax.mail.internet.ContentType;
import javax.mail.internet.InternetAddress;

import org.springframework.core.task.TaskExecutor;

import com.lihelper.mail.Mail;
import com.lihelper.mail.MailSender;
import com.lihelper.mail.content.MixedContent;
import com.lihelper.mail.content.TextContent;
import com.lihelper.service.EmailService;
import com.lihelper.task.EmailSendTask;

public class EmailServiceImpl implements EmailService {
	private MailSender emailSender;
	private TaskExecutor emailTaskExecutor;
	
	@Override
	public void sendEmail(String email, String subject, String content) {
		Mail mail = new Mail();
		try {
			mail.setCharset("UTF-8");
			mail.setSubject(subject);
			mail.setGmtSent(new Date());
			mail.setToAddress(new InternetAddress[] { new InternetAddress(email) });
			MixedContent mc = new MixedContent();
			mc.addContent(new TextContent(content, new ContentType("text/html")));
			mail.setContent(mc);
		} catch (Exception e) {
			return;
		}
		EmailSendTask task = new EmailSendTask(this.emailSender, mail);
		this.emailTaskExecutor.execute(task);
	}

	public void setEmailSender(MailSender emailSender) {
		this.emailSender = emailSender;
	}

	public void setEmailTaskExecutor(TaskExecutor emailTaskExecutor) {
		this.emailTaskExecutor = emailTaskExecutor;
	}
	
}
