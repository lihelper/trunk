package com.lihelper.dao.impl;

import java.util.List;

import org.jtester.unitils.dbfit.DbFit;
import org.testng.Assert;
import org.testng.annotations.Test;
import org.unitils.spring.annotation.SpringBeanByName;

import com.lihelper.base.BaseJtester;
import com.lihelper.dao.AlarmModeDao;

public class AlarmModeDaoImplTest extends BaseJtester {

	@SpringBeanByName
	private AlarmModeDao alarmModeDao;
	
	@DbFit(when = {"AlarmModeDaoImplTest.testGetAlarmModeByAlarmId.when.wiki"})
	@Test
	public void testGetAlarm() {
		List<String> alarmModeSet = alarmModeDao.getAlarmModeByAlarmId(4);
		Assert.assertEquals(alarmModeSet.size(), 2);
	}
}
