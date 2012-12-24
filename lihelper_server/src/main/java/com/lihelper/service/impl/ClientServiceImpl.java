package com.lihelper.service.impl;

import com.lihelper.dao.ClientDao;
import com.lihelper.model.dataobject.ClientDO;
import com.lihelper.model.viewobject.ClientVO;
import com.lihelper.service.ClientService;

public class ClientServiceImpl implements ClientService {
	private ClientDao clientDao;

	@Override
	public ClientVO getClientByHost(String host) {
		ClientDO clientDO = clientDao.getClientByHost(host);
		
		ClientVO clientVO = new ClientVO();
		clientVO.setClientId(clientDO.getId());
		clientVO.setCpu(clientDO.getCpu());
		clientVO.setDisk(clientDO.getDisk());
		clientVO.setMem(clientDO.getMem());
		return clientVO;
	}

	public void setClientDao(ClientDao clientDao) {
		this.clientDao = clientDao;
	}
}
