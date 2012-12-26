package com.lihelper.util;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;

public class WriterUtil {
	private static final String DEFAULT_CHARSET = "UTF-8";

	public static void write(String txt)  {
		HttpServletResponse response = ServletActionContext.getResponse();
		response.setCharacterEncoding(DEFAULT_CHARSET);
		PrintWriter out = null;
		try {
			out = response.getWriter();
			out.println(txt);
			out.flush();
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			if (out != null) {
				out.close();
			}
		}
	}
}

