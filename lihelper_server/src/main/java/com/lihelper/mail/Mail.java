package com.lihelper.mail;
import java.io.Serializable;
import java.util.Date;

import javax.mail.internet.InternetAddress;

import com.lihelper.mail.content.IContent;

public class Mail implements Serializable {
	
	private static final long serialVersionUID = 7012261845618351104L;
	
	/**
	 * 收件人、抄送、密送、回复地址
	 */
	private InternetAddress[] toAddress;
	private InternetAddress[] ccAddress;
	private InternetAddress[] bccAddress;
	private InternetAddress[] replyToAddress;
	
	/**
	 * 发送时间
	 */
	private Date gmtSent;
	
	/**
	 * 字符集，例如：ASCII、ISO-8859-1、GBK、UTF-8
	 */
	private String charset;
	
	/**
	 * 主题
	 */
	private String subject;
	
	/**
	 * 内容
	 */
	private IContent content;
	

	public InternetAddress[] getBccAddress() {
		return bccAddress;
	}

	public void setBccAddress(InternetAddress[] bccAddress) {
		this.bccAddress = bccAddress;
	}

	public InternetAddress[] getCcAddress() {
		return ccAddress;
	}

	public void setCcAddress(InternetAddress[] ccAddress) {
		this.ccAddress = ccAddress;
	}
	
	public String getCharset() {
		return charset;
	}

	public void setCharset(String charset) {
		this.charset = charset;
	}

	public IContent getContent() {
		return content;
	}

	public void setContent(IContent content) {
		this.content = content;
	}

	public Date getGmtSent() {
		return gmtSent;
	}

	public void setGmtSent(Date gmtSent) {
		this.gmtSent = gmtSent;
	}

	public InternetAddress[] getReplyToAddress() {
		return replyToAddress;
	}

	public void setReplyToAddress(InternetAddress[] replyToAddress) {
		this.replyToAddress = replyToAddress;
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public InternetAddress[] getToAddress() {
		return toAddress;
	}

	public void setToAddress(InternetAddress[] toAddress) {
		this.toAddress = toAddress;
	}
	
}