package com.lihelper.mail.content;


public class MixedContent extends MultipartContent {

	/**
	 * 
	 */
	private static final long serialVersionUID = -1959182816586269449L;

	protected final String getSubType() {
		return "mixed";
	}

}
