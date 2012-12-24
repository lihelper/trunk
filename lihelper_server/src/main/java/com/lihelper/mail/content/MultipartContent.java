package com.lihelper.mail.content;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.mail.MessagingException;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMultipart;
import javax.mail.internet.MimePart;

public abstract class MultipartContent extends AbstractContent {

	private static final long serialVersionUID = 8345506971497575198L;
	private final List<IContent> contents = new ArrayList<IContent>();

	public void addContent(IContent content) {
		contents.add(content);
	}

	public final void renderPart(MimePart part, String defaultCharset) throws MessagingException {
		MimeMultipart multipart = new MimeMultipart();
		multipart.setSubType(getSubType());
		
		for (Iterator<IContent> i = contents.iterator(); i.hasNext(); ) {
			IContent content = i.next();
			
			MimeBodyPart bodyPart = new MimeBodyPart();
			content.render(bodyPart, defaultCharset);
			multipart.addBodyPart(bodyPart);
		}
		
		part.setContent(multipart);
	}
	
	protected abstract String getSubType();

}
