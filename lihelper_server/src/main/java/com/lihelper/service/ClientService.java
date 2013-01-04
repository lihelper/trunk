package com.lihelper.service;

import com.lihelper.model.AlarmItemEnum;
import com.lihelper.model.AlarmTypeEnum;
import com.lihelper.model.BasicClient;
import com.lihelper.model.Client;
import com.lihelper.model.MonitorTypeEnum;
import com.lihelper.model.ResultMessage;

public interface ClientService {

	/**
	 * 从数据库中获取基本信息，包括host,clientId,userId
	 * 
	 * @param host
	 * @return
	 */
	public BasicClient getClientInfoInDb(String host);

	/**
	 * 从远程获取Client详细信息，根据ResultMessage.isSuccess()判断结果是否成功。
	 * 
	 * <pre>
	 * 若为true:表示获取信息成功，具体的详细信息通过ResultMessage.getR()获取。
	 * 若为false:表示获取详细失败，具体的失败原因可以根据ResultMessage
	 * .getCode()以及ResultMessage.getMsg()获取.
	 * </pre>
	 * 
	 * @param clientId
	 * @return
	 */
	public ResultMessage<Client> getClientInfoInRemote(int clientId);

	/**
	 * 远程重启Client机器
	 * 
	 * @param clientId
	 * @return
	 */
	public ResultMessage<Object> restart(int clientId);

	/**
	 * 监控报警设置，该接口有两部分组成。
	 * 
	 * <pre>
	 * 1.远程调用client设置监控报警项 
	 * 2.若第1步成功，则将相应的监控报警项添加到数据库中
	 * </pre>
	 * 
	 * @param alarmType
	 * @param alarmItme
	 * @return
	 */
	public ResultMessage<Object> monitorAlarm(int clientId, AlarmTypeEnum alarmTypeEnum, AlarmItemEnum alarmItemEnum, String[] alarmModes);

	/**
	 * 监控报警设置，该接口有两部分组成。
	 * 
	 * <pre>
	 * 1.远程调用client设置监控报警项 
	 * 2.若第1步成功，则将相应的监控报警项添加到数据库中
	 * </pre>
	 * 
	 * @param alarmType
	 * @param alarmItme
	 * @param alarmValue
	 * @return
	 */
	public ResultMessage<Object> monitorAlarm(int clientId, AlarmTypeEnum alarmTypeEnum, AlarmItemEnum alarmItemEnum, String[] alarmModes, int alarmValue);

	/**
	 * 获取远程客户端的监控信息，并以json格式返回
	 * 
	 * @param clientId
	 * @return
	 */
	public String getMonitorInfoInRemote(int clientId);

	/**
	 * 获取指定时间段内的远程客户端的监控信息，并以json格式返回
	 * 
	 * @param clientId
	 * @param begin
	 * @param end
	 * @param monitorTypeEnum
	 * @return
	 */
	public String getMonitorInfosInRemote(int clientId, String begin, String end, MonitorTypeEnum monitorTypeEnum);

	/**
	 * 获取指定时间段内的远程客户端的监控信息，并以json格式返回
	 * 
	 * @param clientId
	 * @param begin
	 * @param end
	 * @param monitorTypeEnum
	 * @param nio
	 * @return
	 */
	public String getMonitorInfosInRemote(int clientId, String begin, String end, MonitorTypeEnum monitorTypeEnum, String nio);
}
