<!DOCTYPE html>
<!-- saved from url=(0018)https://kippt.com/ -->
<html lang="en" class="wf-proximanova-n6-active wf-proximanova-i4-active wf-proximanova-i7-active wf-proximanova-n4-active wf-proximanova-n7-active wf-proximanova-n3-active wf-proximanova-n1-active wf-active"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    <title>中国第一linux辅助平台</title>
    <!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
    
    <link rel="stylesheet" href="css/lihelper.css" type="text/css">
</head>
<body class="page-content about  logged-out ">
<!--网页内容的头部-->
<nav class="navbar">       
  <div class="navbar-inner">
	<div class="container">
	  <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
		<span class="icon-bar"></span>
		<span class="icon-bar"></span>
		<span class="icon-bar"></span>
	  </a>
	  <a href="index.html" class="brand"><img src="images/kippt-logo-86.png" alt="Kippt" width="86" height="46"></a>
	  <div class="nav-collapse">       
		  <ul class="nav actions">
			  <li><a href="login.html" data-link="modal" data-target="#login-modal">登录</a></li>
			  <li><a href="register.html" data-link="modal" data-target="#signup-modal">注册</a></li>
		  </ul>          
		<ul class="nav">
			<li><a href="about.html">关于我们</a></li>
			<li><a href="http://blog.lihelper.com/">Blog</a></li>
		</ul>
	  </div><!--/.nav-collapse -->
	</div>
  </div>   
</nav>
<!--网页内容的头部结束-->  
    

<article class="container">   
<div id="login" class="accounts-form">
  <h2>登录Lihelper平台</h2>
  <hr class="small" />
  
  <div class="connect-buttons">
       <form class="connect-button" name="login" method="post" action="/social/twitter/redirect/" id="twitter-connect-form">
      
       <a href="#" onclick="$('#twitter-connect-form').submit(); return false;" class="btn" id="twitter_button"><span>Log in with <strong>Twitter</strong></span></a>
       </form>

       <form class="connect-button" name="login" method="post" action="/social/facebook/redirect/" id="facebook-connect-form">
       <div style='display:none'><input type='hidden' name='csrfmiddlewaretoken' value='yPQno4d8kBKQOhNfidbeMCb2MHcVx3bq' /></div>
       
       <a href="#" onclick="$('#facebook-connect-form').submit(); return false;" class="btn" id="facebook_button"><span>Log in with <strong>Facebook</strong></span></a>
       </form>
   </div>
   
   <form id="form1" method="POST" action="login.do">   
      <div class="all-errors"></div>
      <div class="input"> <input id="id_email" type="text" name="email" maxlength="75" placeholder="邮箱"/> </div>
      <div class="input"> <input type="password" name="password" id="id_password" placeholder="密码" /> </div>
      <div class="actions clearfix"><input type="submit" value="登 录" class="btn btn-green" /></div>
	  <span id="result"></span>
    </form>
</div>
<p class="note"><a href="reset_password.html">忘记密码?</a> &middot; 需要帐号? <a href="register.html">免费注册</a> </p>
</div>

<!--网页内容的尾部-->
<!--网页内容的尾部-->
<footer>
	<p>
	<a href="about.html">关于我们</a>
	<a href="mailto:hello@kippt.com">Contact</a>
	<a href="http://blog.lihelper.com" target="_blank">Blog</a>
	 Powered by Lihelper</p>       
	<div class="follow-buttons">
		<div style="vertical-align:middle; margin-right:20px"><a href="http://weibo.com/lihelper" class="twitter-follow-button" data-show-count="false">关注 @Linux助手</a>
	</div>        
</footer>
<!--网页内容的尾部结束-->
</article> <!-- /container -->
<div id="fb-root"></div>
<script type ="text/javascript" src ="lib/jquery/jquery.min.js"></script>
<script type ="text/javascript" src ="lib/jquery/jquery.form.js"></script>
<script type="text/javascript">
         // wait for the DOM to be loaded
          $(document).ready(function() 
            {
                $('#result').hide();//显示操作提示的元素不可见
                $('#form1').submit(function()//提交表单
                {
                    //alert("ddd");
                    var options = { 
                    //target:'#result', //后台将把传递过来的值赋给该元素
                    url:'login.do', //提交给哪个执行
                    type:'POST'//, 
                    //success: function(){ alert($('#result').text());} //显示操作提示
                    }; 
                   // $('#form1').ajaxSubmit(options); 
                    //return false; //为了不刷新页面,返回false，反正都已经在后台执行完了，没事！

                });  
            }
         );
 </script>
</body></html>
