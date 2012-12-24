package com.lihelper.mail.content;


public class AlternativeContent extends MultipartContent {

	/**
	 * 
	 */
	private static final long serialVersionUID = -5082420287615358308L;

	protected final String getSubType() {
		return "alternative";
	}

}
