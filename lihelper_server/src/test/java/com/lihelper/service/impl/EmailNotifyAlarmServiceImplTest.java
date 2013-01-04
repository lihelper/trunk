package com.lihelper.service.impl;

import org.testng.Assert;
import org.testng.annotations.Test;
import org.unitils.spring.annotation.SpringBeanByName;

import com.lihelper.base.BaseJtester;
import com.lihelper.model.ResultMessage;
import com.lihelper.service.NotifyAlarmService;

public class EmailNotifyAlarmServiceImplTest extends BaseJtester {

	@SpringBeanByName
	private NotifyAlarmService emailNotifyAlarmService;
	
	@Test
	public void testAlarm() {
		ResultMessage result = emailNotifyAlarmService.alarm("wangysh_0827@sina.com", "this is pig");
		Assert.assertEquals(result.getCode(), 200);
	}
}
