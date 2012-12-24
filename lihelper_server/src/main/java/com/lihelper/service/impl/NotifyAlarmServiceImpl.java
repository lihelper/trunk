package com.lihelper.service.impl;

import com.lihelper.model.ResultMessage;
import com.lihelper.service.EmailService;
import com.lihelper.service.NotifyAlarmService;

public class NotifyAlarmServiceImpl implements NotifyAlarmService {
	private EmailService emailService;

	@Override
	public ResultMessage alarm() {
		emailService.sendEmail("wangysh_0827@sina.com", "this is test",
				"this is test");
		return ResultMessage.SUCCESS;
	}

	public void setEmailService(EmailService emailService) {
		this.emailService = emailService;
	}
}
