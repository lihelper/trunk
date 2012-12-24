package com.lihelper.result;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import com.lihelper.model.dataobject.UserDO;

/**
 *
 */
public class JsonResultFormat {

	public String value(Object obj) {
		if(obj == null){
			return null;
		}
		Object jsonObject;
		if (obj.getClass().isArray()) {
			jsonObject = JSONArray.fromObject(obj);
		} else {
			jsonObject = JSONObject.fromObject(obj);
		}
		return jsonObject.toString();
	}

	public String name() {
		return "json";
	}

	public String getContentType(String encoding) {
		return "text/javascript;charset=" + encoding;
	}
}	
