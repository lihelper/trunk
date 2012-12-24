package com.lihelper.mail;

import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.regex.Pattern;

import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;

import org.apache.commons.lang.StringUtils;

public class MailUtil {
	
	/**
	 * 将地址对象数组转化成字符串
	 * 保存到数据库前，请使用str2Addr后addr2Str规范化地址信息
	 */
	public static String addr2Str(InternetAddress[] addresses) {
		if (addresses == null || addresses.length == 0) {
			return null;
		}
		
		Pattern patternSpecial = Pattern.compile("[\\s\\(\\)<>@,;:\\\\\"\\.\\[\\]]");
		StringBuffer sb = new StringBuffer();
		for (int i = 0; i < addresses.length; i++) {
			String person = addresses[i].getPersonal();
			String address = addresses[i].getAddress();
			boolean hasPerson = StringUtils.isNotBlank(person);
			boolean hasAddress = StringUtils.isNotBlank(address);
			
			if (!hasPerson && !hasAddress) {
				continue;
			}
			
			if (i > 0) {
				sb.append(",");
			}
			
			if (hasPerson) {
				person = person.trim();
				
				boolean hasSpecial = patternSpecial.matcher(person).find();
				if (hasSpecial) {
					sb.append('"');
				}
				
				person = person.replace("\\", "\\\\");
				sb.append(person.replace("\"", "\\\""));
				
				if (hasSpecial) {
					sb.append('"');
				}
				
				if (hasAddress) {
					sb.append(" <");
				}
			}
			
			if (hasAddress) {
				sb.append(address.trim());
			}
			
			if (hasPerson && hasAddress) {
				sb.append(">");
			}
		}
		
		return sb.toString();
	}
	
	/**
	 * 将字符串解析成InternetAddress数组
	 */
	public static InternetAddress[] str2Addr(String str) {
		try {
			return str2Addr(str, false);
		} catch (AddressException ex) {
			return null;
		}
	}

	// 解析邮件地址字符串，精确指出哪个地址不合法
	// validate = true: 若地址不合法，则抛出MailException异常。用于发送邮件时的地址验证。
	// validate = false: 若地址不合法，尽量显示它。
	public static InternetAddress[] str2Addr(String str, boolean validate) throws AddressException {
		if (StringUtils.isBlank(str)) {
			return null;
		}
		
		// 将全角逗号、全角分号、半角分号替换成半角逗号
		if (validate) {
			str = str.replaceAll("[，；;]", ",");
		}

		Pattern patternEmail = Pattern.compile("\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*");
		List<InternetAddress> addressList = new ArrayList<InternetAddress>();
		char[] ca = str.toCharArray();
		boolean inQuote = false;		
		int cur = 0;
		int i = 0;
		
		for (; i <= ca.length; i++) {
			if (i == ca.length || ca[i] == ',') {
				if (!inQuote) {
					String txt = new String(ca, cur, i - cur);
					if (StringUtils.isNotBlank(txt)) {
						txt = txt.trim();
						
						InternetAddress[] addr = null;
						try {
							addr = InternetAddress.parse(txt);
						} catch (AddressException e) {
							if (validate) {
								throw new AddressException(null, txt);
							} else {
								try {
									// 若解析错误，则将其作为Personal显示
									addr = new InternetAddress[] { new InternetAddress(null, txt) };
								} catch (UnsupportedEncodingException ex) {
								
								}
							}
						}
						
						if (addr != null && addr.length > 0) {
							if (validate) {
								for (int j = 0; j < addr.length; j++) {
									String ia = addr[j].getAddress();
									if (StringUtils.isBlank(ia) || !patternEmail.matcher(ia).matches()) {
										throw new AddressException(null, txt);
									}
								}
							}
							
							addressList.addAll(Arrays.asList(addr));
						}
					}
						
					cur = i + 1;
				} else if (i == ca.length && validate) {
					throw new AddressException(null, str.substring(cur));
				}
			} else if (ca[i] == '"') {
				if (i == cur || ca[i - 1] != '\\') {
					inQuote = !inQuote;
				}
			}
		}
		
		int n = addressList.size();
		if (n > 0) {
			return addressList.toArray(new InternetAddress[n]);
		} else {		
			return null;
		}
	}
	
}
