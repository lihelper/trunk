package com.lihelper.api.action;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;

import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.util.CollectionUtils;

public class ExecuteActionFactory implements ApplicationContextAware{

	private Map<String,ExecuteAction> executeActionMap = new HashMap<String,ExecuteAction>();
	
	@SuppressWarnings("unchecked")
	@Override
	public void setApplicationContext(ApplicationContext context)
			throws BeansException {
		Map map = context.getBeansOfType(ExecuteAction.class);
		if(CollectionUtils.isEmpty(map)){
			return;
		}
		Set<Map.Entry<String, ExecuteAction>> set=map.entrySet();
		Iterator<Map.Entry<String, ExecuteAction>> it = set.iterator();
		Map.Entry<String, ExecuteAction> entry;
		while(it.hasNext()){
			entry=it.next();
			executeActionMap.put(entry.getKey(), entry.getValue());
		}
	}

	public ExecuteAction getExecuteAction(String name) {
		return executeActionMap.get(name);
	}
}
