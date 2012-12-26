function asyncCall(obj) {
        $.ajax({
                url:"http://127.0.0.1:8080/lihelper/web/getvminfo.action",
                type: "GET",
                cache: false,
                success: function(html) {
                   
				   $(obj).html(html); 
                },
				error: function(){
					document.getElementById(obj).innerHTML="connection error";
					return;
				}
        });
}