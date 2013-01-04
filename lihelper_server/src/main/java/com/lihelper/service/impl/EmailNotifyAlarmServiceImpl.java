package com.lihelper.service.impl;

import com.lihelper.model.ResultMessage;
import com.lihelper.service.EmailService;
import com.lihelper.service.NotifyAlarmService;

public class EmailNotifyAlarmServiceImpl implements NotifyAlarmService {
	private String subject;
	
	private String content;
	
	private EmailService emailService;

	@Override
	public ResultMessage alarm(String destination, String message) {

		if (subject == null || subject.length() == 0) {
			return new ResultMessage(-202, "subject empty.");
		}

		if (content == null || content.length() == 0) {
			return new ResultMessage(-202, "content empty.");
		}
		// 用message替换content中的<message/>
		content = content.replaceAll("\\$message\\$", message);
		try {
			emailService.sendEmail(destination, subject, content);
		} catch (Exception e) {
			return new ResultMessage(-203, e.getMessage());
		}
		return ResultMessage.SUCCESS;
	}

	public void setEmailService(EmailService emailService) {
		this.emailService = emailService;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public void setContent(String content) {
		this.content = content;
	}
	public static void main(String[] args) {
		String a = "<html><body><h1>alarm $message$ </body</html>";
		System.out.println(a.replaceAll("\\$message\\$", "this is pig"));
	}
}
