function showProduct(obj) {
        $.ajax({
                url:"http://www.163.com/",
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
}n