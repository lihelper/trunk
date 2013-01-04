package com.lihelper.service;

import com.lihelper.model.AlarmItemEnum;
import com.lihelper.model.AlarmTypeEnum;
import com.lihelper.model.ResultMessage;

/**
 * 报警分发服务,提供多种报警服务，其中包括邮件、短信、电话、QQ等 目前该版本只支持邮件报警
 * 
 * @author yongsheng.fangys
 * 
 */
public interface NotifyAlarmDistributeService {
	/**
	 * 根据报警类型，报警项以及当前值，发送报警通知 具体通知何种报警方式，根据用户之前设置的报警项的通知方式进行报警通知
	 * 
	 * @param alarmType
	 * @param alarmItem
	 * @param currentValue
	 * @return
	 */
	public ResultMessage<Object> alarm(AlarmTypeEnum alarmTypeEnum, AlarmItemEnum alarmItemEnum, int currentValue);
}
