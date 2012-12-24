package com.lihelper.mail.content;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

import javax.activation.DataSource;


public class StringDataSource implements DataSource {


	private final String content;
	private final String mimeType; 
	private final String charset;
	
	/**
	 * @param name 附件显示名称
	 * @param content 附件内容
	 * @param mimeType 附件内容的MIME类型
	 * @param charset 附件文件的编码方式
	 */
	public StringDataSource(String content, String mimeType, String charset) {
		this.content = content;
		this.mimeType = mimeType;
		this.charset = charset;
	}
	
	public String getName() {
		return null;
	}
	
	public String getContentType() {
		return mimeType;
	}
	
	public InputStream getInputStream() throws IOException {
		return new ByteArrayInputStream(content.getBytes(charset));
	}

	public OutputStream getOutputStream() throws IOException {
		throw new UnsupportedOperationException();
	}

}
