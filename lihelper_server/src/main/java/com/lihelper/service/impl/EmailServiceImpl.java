package com.lihelper.service.impl;

import java.util.Date;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import javax.mail.internet.ContentType;
import javax.mail.internet.InternetAddress;

import org.apache.log4j.Logger;

import com.lihelper.mail.Mail;
import com.lihelper.mail.MailSender;
import com.lihelper.mail.content.MixedContent;
import com.lihelper.mail.content.TextContent;
import com.lihelper.service.EmailService;

public class EmailServiceImpl implements EmailService {
	private final static Logger logger = Logger
			.getLogger(EmailServiceImpl.class);

	private final static int MAX_THREAD = 50;

	private final static String DEFAULT_CHARSET = "UTF-8";

	private final static String CONTENT_TYPE = "text/html";

	private MailSender emailSender;

	private ExecutorService executorService = Executors
			.newFixedThreadPool(MAX_THREAD);

	@Override
	public void sendEmail(String email, String subject, String content)
			throws Exception {
		final Mail mail = new Mail();
		mail.setCharset(DEFAULT_CHARSET);
		mail.setSubject(subject);
		mail.setGmtSent(new Date());
		mail.setToAddress(new InternetAddress[] { new InternetAddress(email) });
		MixedContent mc = new MixedContent();
		mc.addContent(new TextContent(content, new ContentType(CONTENT_TYPE)));
		mail.setContent(mc);

		executorService.execute(new Runnable() {
			@Override
			public void run() {
				try {
					emailSender.send(mail);
				} catch (Exception e) {
					logger.error("send email: ", e);
				}
			}
		});
	}

	public void setEmailSender(MailSender emailSender) {
		this.emailSender = emailSender;
	}
}
