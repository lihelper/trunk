package com.lihelper.mail.content;

import javax.mail.MessagingException;
import javax.mail.internet.ContentType;
import javax.mail.internet.MimePart;

import org.apache.commons.lang.StringUtils;


public class TextContent extends AbstractContent {
	
	private static final long serialVersionUID = -8754939350952235084L;

	private static final String CHARSET = "charset";
	
	private final String content;
	private final ContentType contentType;
	
	private String transferEncoding = "quoted-printable";
	
	public TextContent(String content, ContentType contentType) {
		this.content = content;
		this.contentType = contentType;
	}
	
	public void setTransferEncoding(String transferEncoding) {
		this.transferEncoding = transferEncoding;
	}

	public void renderPart(MimePart part, String defaultCharset) throws MessagingException {
		String charset = contentType.getParameter(CHARSET);
		if (StringUtils.isBlank(charset)) {
			ContentType type = new ContentType(contentType.toString());
			type.setParameter(CHARSET, defaultCharset);
			part.setContent(content, type.toString());
		} else {
			part.setContent(content, contentType.toString());
		}
		
		part.setHeader("Content-Transfer-Encoding", transferEncoding);
	}

}
