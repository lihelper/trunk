$(document).ready(function(){
	$.getJSON("http://127.0.0.1:8080/lihelper/web/getvminfo.action?client_id=2&cookie_id=71FEEA2314A2DE55E38A45E82AFF0CF6",function(data){
		$("#cpu").html(data.data.cpu);
		$("#mem").html(data.data.mem);
		$("#uptime").html(data.data.uptime);
		$("#kernel").html(data.data.kernel);
		$("#os_type").html(data.data.os_type);
		$("#release").html(data.data.release);
		$.each(data.data.disks,function(entryIndex,entry){  
			var html = 'mount:' + entry['mount'] + '|';  
			html += 'size:' + entry['size'] + '<br>';                    
			$('#disks').append(html);  
        });
		$.each(data.data.network,function(entryIndex,entry){  
			var html = 'nio:' + entry['nio'] + '|';  
			html += 'ip:' + entry['ip'] + '<br>';                    
			$('#network').append(html);  
        });		
	});
	
	/*$.ajax({
	  dataType: "html",
	  url: "/lihelper/web/getvminfo.action?client_id=2&cookie_id=71FEEA2314A2DE55E38A45E82AFF0CF6",
	  success: function(data){
	    alert(data);
		//$("#vminfo").html(data.data);
	  },
	  error:function(data){
		alert("error:"+JSON.stringify(data));
	  }
	});*/
});