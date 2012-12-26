package com.lihelper.web.action;

import com.lihelper.model.Client;
import com.lihelper.model.view.ClientView;
import com.lihelper.service.ClientService;
import com.opensymphony.xwork2.ActionSupport;

public class GetVmInfoAction extends ActionSupport {
	private static final long serialVersionUID = 201028793245689341L;

	private ClientView clientView;

	public String execute() {
		//远程client中获取信息
		Client client = clientService.getClientInfoInRemote(1);
		//对象转化
		convert(client);
		return SUCCESS;
	}

	public void convert(Client client) {
		clientView = new ClientView();
		
		if (client == null) {
			return;
		}
		clientView.setHost(client.getHost());
		clientView.setKernel(client.getKernel());
		clientView.setOsType(client.getOsType());
		clientView.setRelease(client.getRelease());
		clientView.setUptime(client.getUptime());
	}

	public ClientView getClientView() {
		return clientView;
	}

	private ClientService clientService;

	public void setClientService(ClientService clientService) {
		this.clientService = clientService;
	}
}
