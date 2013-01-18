package com.lihelper.web.action;

import com.lihelper.constant.Constants;
import com.lihelper.model.Client;
import com.lihelper.model.ResultMessage;
import com.lihelper.model.view.ClientView;
import com.lihelper.service.ClientService;
import com.lihelper.util.ParameterUtil;
import com.opensymphony.xwork2.ActionSupport;

public class GetVmInfoAction extends ActionSupport {
	private final static long serialVersionUID = 201028793245689341L;

	public String execute() {

		int clientId = ParameterUtil.getParameterIntValue(Constants.CLIENT_ID);

		/** 调用client获取详细信息 */
		ResultMessage<?> result = clientService.getClientInfoInRemote(clientId);

		if (!result.isSuccess()) {
			return Constants.ACTION_GET_VM_INFO_FAILURE;
		}

		/** 将对象Clinet转化成ClientView */
		convert((Client) result.getR());

		return Constants.ACTION_GET_VM_INFO_SUCCESS;
	}

	private void convert(Client client) {
		if (client == null) {
			return;
		}

		clientView.setCpu(client.getCpu());
		clientView.setMem(client.getMem());
		clientView.setKernel(client.getKernel());
		clientView.setOsType(client.getOsType());
		clientView.setRelease(client.getRelease());
		clientView.setUptime(client.getUptime());
		clientView.setNetworks(client.getNetworks());
	}

	/** velocity展现层使用 */
	private ClientView clientView = new ClientView();

	public ClientView getClientView() {
		return clientView;
	}

	private ClientService clientService;

	public void setClientService(ClientService clientService) {
		this.clientService = clientService;
	}
}
