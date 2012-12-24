package com.lihelper.mail.content;

import java.io.UnsupportedEncodingException;

import javax.activation.DataHandler;
import javax.activation.DataSource;
import javax.mail.MessagingException;
import javax.mail.internet.MimePart;
import javax.mail.internet.MimeUtility;

public class AttachmentContent extends AbstractContent {
	
	private static final long serialVersionUID = -1088181739537479956L;
	private final String fileName;
	private final DataSource dataSource;
	
	/**
	 * @param fileName 附件显示名称
	 * @param dataSource 附件内容来源
	 * 
	 * @see javax.activation.FileDataSource
	 * @see javax.activation.URLDataSource
	 * @see com.cw.common.mail.content.StringDataSource
	 */
	public AttachmentContent(String fileName, DataSource dataSource) {
		this.fileName = fileName;
		this.dataSource = dataSource;
	}

	public void renderPart(MimePart part, String defaultCharset) throws MessagingException {
		try {
			part.setFileName(MimeUtility.encodeText(fileName, defaultCharset, null));
		} catch (UnsupportedEncodingException e) {
			throw new MessagingException("failed to encode file name '" 
					+ fileName + "' with charset " + defaultCharset, e);
		}
		
		part.setDataHandler(new DataHandler(dataSource));
	}

}
