package com.lihelper.result;

import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;
import org.apache.struts2.StrutsStatics;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionInvocation;
import com.opensymphony.xwork2.Result;

/**
 * 返回结果的类 注意：这个类中不要抛出异常，否则会循环再次进入。
 * 
 * @author yongsheng.wangys
 * 
 */
public class JsonResult implements Result {
	private static final long serialVersionUID = -5560202412199072402L;

	@Override
	public void execute(ActionInvocation invocation) throws Exception {
		ActionContext actionContext = invocation.getInvocationContext();
		HttpServletResponse response = (HttpServletResponse) actionContext
				.get(StrutsStatics.HTTP_RESPONSE);
		response.setHeader("Pragma", "No-cache");
		response.setHeader("Cache-Control", "no-cache");
		response.setDateHeader("Expires", 0);

		String result = ServletActionContext.getContext().getValueStack()
				.findString("_result");
		if (result == null) {
			result = "{\"code\":-1,\"message\":\"exception\"}";
		}
		
		response.getWriter().write(result);
	}

	private String encoding = "UTF-8";
	private Integer code;
	private String msg;

	public Integer getCode() {
		return code;
	}

	public void setCode(Integer code) {
		this.code = code;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

	public String getEncoding() {
		return encoding;
	}

	public void setEncoding(String encoding) {
		this.encoding = encoding;
	}

}
