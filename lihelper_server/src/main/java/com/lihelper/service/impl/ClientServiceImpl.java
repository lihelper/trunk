package com.lihelper.service.impl;

import java.util.ArrayList;
import java.util.List;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.apache.commons.httpclient.HttpMethod;
import org.apache.commons.httpclient.methods.GetMethod;

import com.lihelper.dao.ClientDao;
import com.lihelper.model.BasicClient;
import com.lihelper.model.Client;
import com.lihelper.model.Network;
import com.lihelper.service.ClientService;
import com.lihelper.service.HttpClientAdapter;

public class ClientServiceImpl implements ClientService {

	@Override
	public BasicClient getClientInfoInDb(String host) {
		return clientDao.getClientByHost(host);
	}

	@Override
	public Client getClientInfoInRemote(int clientId) {
		//获取通信的主机ip
		BasicClient basicClient = clientDao.getClientById(clientId);
		String host = basicClient.getHost();

		// 获取client信息
		// HttpClientAdapter adapter = new HttpClientAdapter(host, 10888);
		// HttpMethod method = new GetMethod("lihelper/basic?method=getvminfo");
		HttpClientAdapter adapter = new HttpClientAdapter(host, 8080);
		HttpMethod method = new GetMethod("/LiHelper3/test.jsp");
		String response = adapter.executeMethod(method);

		// 解析client返回过来的数据
		Client client = new Client();
		client.setHost(host);
		JSONObject jsonObject = JSONObject.fromObject(response);
		JSONObject dataObject = jsonObject.getJSONObject("data");
		client.setCpu((Integer) dataObject.get("cpu"));
		client.setMem((Integer) dataObject.get("mem"));
		client.setDisk((Integer) dataObject.get("disk"));
		client.setUptime((String) dataObject.get("uptime"));
		client.setKernel((String) dataObject.get("kernel"));
		client.setOsType((String) dataObject.get("osType"));
		client.setRelease((String) dataObject.get("release"));

		List<Network> networks = new ArrayList<Network>();
		JSONArray array = dataObject.getJSONArray("network");
		int size = array.size();
		for (int i = 0; i < size; i++) {
			String nio = (String) array.getJSONObject(i).get("nio");
			String ip = (String) array.getJSONObject(i).get("ip");
			Network network = new Network();
			network.setIp(ip);
			network.setNio(nio);
			networks.add(network);
		}
		client.setNetworks(networks);
		return client;
	}

	private ClientDao clientDao;

	public void setClientDao(ClientDao clientDao) {
		this.clientDao = clientDao;
	}

}
