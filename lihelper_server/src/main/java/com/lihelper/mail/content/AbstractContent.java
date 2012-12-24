package com.lihelper.mail.content;

import javax.mail.MessagingException;
import javax.mail.internet.MimePart;


public abstract class AbstractContent implements IContent {

	private static final long serialVersionUID = -1532299406829717504L;
	private String id;

	public String getId() {
		return id;
	}
	
	public void setId(String id) {
		this.id = id;
	}
	
	public final void render(MimePart part, String defaultCharset) throws MessagingException {
		if (id != null && id.length() != 0 ) {
			part.setHeader("Content-ID", '<' + id + '>');
		}
		
		renderPart(part, defaultCharset);
	}
	
	protected abstract void renderPart(MimePart part, String defaultCharset) throws MessagingException;

}
