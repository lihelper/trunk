package com.lihelper.util;

import com.lihelper.model.ResultDomain;
import com.lihelper.model.ResultMessage;
import com.opensymphony.xwork2.util.ValueStack;

public final class StackUtil {
	private final static String RESULT_KEY = "_result";

	public static void setResult(ValueStack valueStack, ResultMessage<?> result) {
		valueStack.set(RESULT_KEY, new ResultDomain(result));
	}

	public static void setResult(ValueStack valueStack, String result) {
		valueStack.set(RESULT_KEY, result);
	}

	public static void setResult(ValueStack valueStack, ResultDomain result) {
		valueStack.set(RESULT_KEY, result);
	}
}
