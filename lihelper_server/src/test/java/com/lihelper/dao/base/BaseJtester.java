package com.lihelper.dao.base;

import org.jtester.testng.JTester;
import org.jtester.unitils.spring.AutoBeanInject;
import org.jtester.unitils.spring.AutoBeanInject.BeanMap;
import org.unitils.spring.annotation.SpringApplicationContext;


@SpringApplicationContext({
    "classpath:spring-framework.xml"
	})
@AutoBeanInject(maps = { @BeanMap(intf = "**.*", impl = "**.impl.*Impl") })
public abstract class BaseJtester extends JTester {

}