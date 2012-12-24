package com.lihelper.dao.impl;

import org.testng.Assert;
import org.jtester.unitils.dbfit.DbFit;
import org.testng.annotations.Test;
import org.unitils.spring.annotation.SpringBeanByName;

import com.lihelper.dao.UserDao;
import com.lihelper.dao.base.BaseJtester;
import com.lihelper.model.dataobject.UserDO;

public class UserDaoImplTest extends BaseJtester {

	@SpringBeanByName
	private UserDao userDao;
	
	@DbFit(when = {"UserDaoImplTest.testGetUserByEmail.when.wiki"})
	@Test
	public void testGetUserByEmail() {
		UserDO user = userDao.getUserByEmail("test1@ali.com");
		Assert.assertNotNull(user);
	}
}
