package com.lihelper.service;

import com.lihelper.model.ResultMessage;

public interface NotifyAlarmService {

	/**
	 * 报警通知
	 * 
	 * <h1>@destination表示报警的目标地址，根据不同的报警通知方式，该值也有不同的类型;</h1> <h1>
	 * 如邮件方式，该参数应该是邮件地址。短信方式，该参数应该是手机号码</h1> <h1>
	 * @message表示报警信息，具体的通知内容根据报警类型自行设置</h1>
	 * 
	 * @param destination
	 * @param subject
	 * @param content
	 * @return ResultMessage 返回值中code == 200 表示报警处理成功，具体发送是否成功是否通过AlarmLog获取
	 */
	public ResultMessage alarm(String destination, String message);
}
