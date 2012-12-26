package com.lihelper.service.impl;

import com.lihelper.model.RequestHolder;
import com.lihelper.model.ResultMessage;
import com.lihelper.service.EmailService;
import com.lihelper.service.NotifyAlarmService;

public class NotifyAlarmServiceImpl implements NotifyAlarmService {
	private EmailService emailService;

	@Override
	public ResultMessage alarm(String alarmType, String alarmItem,
			int currentValue) {
		//通过clientId/alarmType/alarmItem获取监控信息?
		String alarmEmail = RequestHolder.getCurrentUser().getAlarmEmail();
		emailService.sendEmail("wangysh_0827@sina.com", "this is test",
				"this is test");
		return ResultMessage.SUCCESS;
	}
	
	public void setEmailService(EmailService emailService) {
		this.emailService = emailService;
	}

	@Override
	public ResultMessage setAlarm(String alarmType, String alarmItem,
			int alarmValue) {
		// TODO Auto-generated method stub
		return null;
	}
}
