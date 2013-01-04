package com.lihelper.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class DateUtil {

	public static long date2long(String datetime) throws ParseException {
		SimpleDateFormat sdf = new SimpleDateFormat("MM/dd/yyyy HH:mm:ss");
		Date dt2 = sdf.parse(datetime);
		return dt2.getTime() / 1000;
	}
}
