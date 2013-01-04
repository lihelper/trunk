package com.lihelper.mail;

import java.util.Date;
import java.util.Properties;

import javax.mail.Authenticator;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.ContentType;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMessage.RecipientType;

import com.lihelper.mail.content.MixedContent;
import com.lihelper.mail.content.TextContent;

public class MailSender {

	private static final String SSL_SOCKET_FACTORY = "javax.net.ssl.SSLSocketFactory";

	/**
	 * SMTP服务器地址及端口
	 */
	private String host;
	private int port = 25;

	/**
	 * SMTP服务器是否需要验证用户名密码
	 */
	private boolean auth = true;

	/**
	 * 是否采用SSL连接SMTP服务器
	 */
	private boolean ssl;

	/**
	 * 超时设置
	 */
	private long connectionTimeout = 60000;
	private long timeout = 60000;

	/**
	 * 发送帐户的用户名和密码
	 */
	private String username;
	private String password;

	/**
	 * 发件人名称
	 */
	private String fromName;

	/**
	 * 发件人地址
	 */
	private String fromAddress;

	public void setAuth(boolean auth) {
		this.auth = auth;
	}

	public void setConnectionTimeout(long connectionTimeout) {
		this.connectionTimeout = connectionTimeout;
	}

	public void setHost(String host) {
		this.host = host;
	}

	public void setPort(int port) {
		this.port = port;
	}

	public void setSsl(boolean ssl) {
		this.ssl = ssl;
	}

	public void setTimeout(long timeout) {
		this.timeout = timeout;
	}

	public void setFromAddress(String fromAddress) {
		this.fromAddress = fromAddress;
	}

	public String getFromAddress() {
		return fromAddress;
	}

	public void setFromName(String fromName) {
		this.fromName = fromName;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public void send(Mail mail) throws Exception {
		Properties props = new Properties();

		if (ssl) {
			props.setProperty("mail.smtp.socketFactory.class", SSL_SOCKET_FACTORY);
			props.setProperty("mail.smtp.socketFactory.fallback", "false");
			props.setProperty("mail.smtp.socketFactory.port", Integer.toString(port));
		}

		props.setProperty("mail.smtp.host", host);
		props.setProperty("mail.smtp.port", Integer.toString(port));
		props.setProperty("mail.smtp.auth", Boolean.toString(auth));
		props.setProperty("mail.smtp.connectiontimeout", Long.toString(connectionTimeout));
		props.setProperty("mail.smtp.timeout", Long.toString(timeout));

		Session session = Session.getInstance(props, new Authenticator() {
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(username, password);
			}
		});

		MimeMessage message = new MimeMessage(session);

		message.addFrom(new InternetAddress[] { new InternetAddress(fromAddress, fromName) });
		message.addRecipients(RecipientType.TO, mail.getToAddress());
		message.addRecipients(RecipientType.CC, mail.getCcAddress());
		message.addRecipients(RecipientType.BCC, mail.getBccAddress());
		message.setReplyTo(mail.getReplyToAddress());

		message.setSentDate(mail.getGmtSent());
		message.setSubject(mail.getSubject(), mail.getCharset());

		mail.getContent().render(message, mail.getCharset());

		Transport.send(message);
	}

	public static void main(String[] args) {
		String subject = "thank you";
		String content = "this is test ,thank you";
		String toEmail = "wangysh_0827@sina.com";
		Mail mail = new Mail();
		try {
			mail.setCharset("UTF-8");
			mail.setSubject(subject);
			mail.setGmtSent(new Date());
			mail.setToAddress(new InternetAddress[] { new InternetAddress(toEmail) });
			MixedContent mc = new MixedContent();
			mc.addContent(new TextContent(content, new ContentType("text/html")));
			mail.setContent(mc);
		} catch (Exception e) {
			System.out.println(e);
			return;
		}
		MailSender mailSender = new MailSender();
		mailSender.setAuth(true);
		mailSender.setFromAddress("wysh_110@163.com");
		mailSender.setFromName("jack.wang");
		mailSender.setHost("smtp.163.com");
		mailSender.setUsername("wysh_110@163.com");
		mailSender.setPassword("05733643313");
		// mailSender.setPort(465);
		try {
			mailSender.send(mail);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}