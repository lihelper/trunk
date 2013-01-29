package com.lihelper.service.impl;

import java.util.ArrayList;
import java.util.List;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.apache.commons.httpclient.HttpMethod;
import org.apache.commons.httpclient.methods.GetMethod;
import org.apache.log4j.Logger;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.transaction.TransactionDefinition;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.support.DefaultTransactionDefinition;

import com.lihelper.constant.Constants;
import com.lihelper.dao.AlarmDao;
import com.lihelper.dao.AlarmModeDao;
import com.lihelper.dao.ClientDao;
import com.lihelper.model.AlarmItemEnum;
import com.lihelper.model.AlarmTypeEnum;
import com.lihelper.model.BasicClient;
import com.lihelper.model.Client;
import com.lihelper.model.Disk;
import com.lihelper.model.MonitorTypeEnum;
import com.lihelper.model.Network;
import com.lihelper.model.ResultMessage;
import com.lihelper.service.ClientService;
import com.lihelper.service.HttpClientAdapter;

public class ClientServiceImpl implements ClientService {
	private final static Logger logger = Logger.getLogger(ClientServiceImpl.class);

	/** 客户端默认的服务端口 */
	private final static int DEFAULT_PORT = 10888;

	@Override
	public BasicClient getClientInfoInDb(String host) {
		return clientDao.getClientByHost(host);
	}

	@Override
	public String getClientInfoInRemote(int clientId) {

		/** 设置获取客户端详细信息的请求URI */
		ResultMessage<String> rqResult = sendRequestInGetMethod(clientId, Constants.METHOD_GET_VM_INFO_URI);
		return rqResult.getR();
	}

	@Override
	public ResultMessage<Object> restart(int clientId) {

		ResultMessage<String> reqResultMsg = sendRequestInGetMethod(clientId, Constants.METHOD_RESTART_URI);

		if (reqResultMsg.isSuccess()) {
			return ResultMessage.SUCCESS;
		}

		return new ResultMessage<Object>(reqResultMsg.getCode(), reqResultMsg.getMsg());
	}

	@Override
	public ResultMessage<Object> monitorAlarm(int clientId, AlarmTypeEnum alarmTypeEnum, AlarmItemEnum alarmItemEnum, String[] alarmModes) {
		return monitorAlarm(clientId, alarmTypeEnum, alarmItemEnum, alarmModes, -1);
	}

	@Override
	public ResultMessage<Object> monitorAlarm(int clientId, AlarmTypeEnum alarmTypeEnum, AlarmItemEnum alarmItemEnum, String[] alarmModes, int alarmValue) {

		/**
		 * 拼装请求的URI
		 * 
		 * <p>
		 * 具体的例子如下：
		 * http://42.125.126.1:10888/lihelper/monitor?method=monitor_alarm
		 * &alarm_type=basic&alarm_item=cpu&alarm_value=90
		 * </p>
		 */
		String uri = String.format("%s&alarm_type=%s&alarm_item=%s&alarm_value=%d", Constants.METHOD_MONITOR_ALARM_URI, alarmTypeEnum.getName(), alarmItemEnum.getName(), alarmValue);

		ResultMessage<String> reqResultMsg = sendRequestInGetMethod(clientId, uri);

		if (!reqResultMsg.isSuccess()) {
			return new ResultMessage<Object>(-1, "send request error");
		}

		DefaultTransactionDefinition def = new DefaultTransactionDefinition(TransactionDefinition.PROPAGATION_REQUIRED);// 事务定义类
		TransactionStatus status = transactionManager.getTransaction(def);
		try {
			int alarmId = alarmDao.inertAlarm(clientId, alarmTypeEnum.getName(), alarmItemEnum.getName(), alarmValue);

			for (String alarmModeName : alarmModes) {
				alarmModeDao.insertAlarmMode(alarmId, alarmModeName);
			}

			transactionManager.commit(status);
		} catch (Throwable e) {
			logger.error("exception occurs, we roll back transaction", e);
			transactionManager.rollback(status);
			return new ResultMessage<Object>(-2, "insert db error");
		}

		return ResultMessage.SUCCESS;
	}

	@Override
	public String getMonitorInfoInRemote(int clientId) {
		ResultMessage<String> result = sendRequestInGetMethod(clientId, Constants.METHOD_GET_MONITOR_INFO_URI);
		return result.getR();
	}

	@Override
	public String getMonitorInfosInRemote(int clientId, String begin, String end, MonitorTypeEnum monitorTypeEnum) {
		return getMonitorInfosInRemote(clientId, begin, end, monitorTypeEnum, null);
	}

	@Override
	public String getMonitorInfosInRemote(int clientId, String begin, String end, MonitorTypeEnum monitorTypeEnum, String nio) {
		String requestUrl = null;

		if (nio == null) {
			requestUrl = String.format("%s&begin=%s&end=%s&monitor_type=%s", Constants.METHOD_GET_MONITOR_INFOS_URI, begin, end, monitorTypeEnum.getName());
		} else {
			requestUrl = String.format("%s&begin=%s&end=%s&monitor_type=%s&nio=%s", Constants.METHOD_GET_MONITOR_INFOS_URI, begin, end, monitorTypeEnum.getName(), nio);
		}

		ResultMessage<String> result = sendRequestInGetMethod(clientId, requestUrl);
		return result.getR();
	}

	/**
	 * <pre>
	 * 发送Http的Get请求到指定的client上,返回ResultMessage
	 * </pre>
	 * 
	 * <pre>
	 *      用户可以通过ResultMessage中isSuccess()方法返回值进行判断。
	 * 		true:  表示返回成功。可以通过ResultMessage类的getT()方法获取返回的结果串
	 *      false: 表示返回失败。可以通过ResultMessage类的getMessage()方法获取失败描述信息
	 * </pre>
	 * 
	 * @param clientId
	 * @param requestURI
	 * @return
	 */
	private ResultMessage<String> sendRequestInGetMethod(int clientId, String requestURI) {

		/** 通过clientId获取Client的主机地址 */
		BasicClient basicClient = clientDao.getClientById(clientId);
		if (basicClient == null) {
			return new ResultMessage<String>(-1, "not found client");
		}

		String host = basicClient.getHost();

		if (host == null || host.length() == 0) {
			return new ResultMessage<String>(-1, "host not empty");
		}

		/** 发起Http请求 */
		HttpClientAdapter adapter = new HttpClientAdapter(host, DEFAULT_PORT);
		HttpMethod method = new GetMethod(requestURI);
		String response = adapter.executeMethod(method);

		/** 设置输出返回值 */
		ResultMessage<String> resultMessage = new ResultMessage<String>();
		resultMessage.setCode(200);
		resultMessage.setMsg("successful");
		resultMessage.setR(response);
		return resultMessage;
	}

	private AlarmDao alarmDao;

	private ClientDao clientDao;

	private AlarmModeDao alarmModeDao;

	private DataSourceTransactionManager transactionManager;

	public void setTransactionManager(DataSourceTransactionManager transactionManager) {
		this.transactionManager = transactionManager;
	}

	public void setAlarmModeDao(AlarmModeDao alarmModeDao) {
		this.alarmModeDao = alarmModeDao;
	}

	public void setAlarmDao(AlarmDao alarmDao) {
		this.alarmDao = alarmDao;
	}

	public void setClientDao(ClientDao clientDao) {
		this.clientDao = clientDao;
	}
}
