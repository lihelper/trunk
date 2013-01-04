package com.lihelper.dao.impl;

import org.jtester.unitils.dbfit.DbFit;
import org.testng.Assert;
import org.testng.annotations.Test;
import org.unitils.spring.annotation.SpringBeanByName;

import com.lihelper.base.BaseJtester;
import com.lihelper.dao.AlarmDao;
import com.lihelper.model.Alarm;

public class AlarmDaoImplTest extends BaseJtester {

	@SpringBeanByName
	private AlarmDao alarmDao;
	
	@DbFit(when = {"AlarmDaoImplTest.testGetAlarm.when.wiki"})
	@Test
	public void testGetAlarm() {
		final int clientId = 1 ;
		final String alarmType = "php";
		final String alarmItem = "health";
		Alarm alarm = alarmDao.getAlarm(clientId, alarmType, alarmItem);
		Assert.assertNotNull(alarm);
		Assert.assertEquals(alarm.getId(), 4);
	}
}
