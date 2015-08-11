<%@ page language="java" import="java.util.*" %>
<%@page contentType="text/html;charset=gb2312" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
  <meta name="description" content="宫崎骏与他的朋友们,有童话,有音乐,谈梦想,谈环保,谈人生,谈生存">
  <meta name="keywords" content="宫崎骏,久石让,千与千寻,龙猫,梦想,环保,人生,生存">
  <title>please back</title>
  <link rel="shortcut icon" href="ico/favicon.ico">
  <link rel="bookmark" href="ico/favicon.ico">
  <link rel="shortcut icon" href="ico//favicon.ico"/>
  <link rel="bookmark" href="ico//favicon.ico"/>
  <link rel="icon" href="ico/animated_favicon.gif" type="image/gif" />
  <link rel="author" href="http://user.qzone.qq.com/710941702">
  <link rel="stylesheet" type="text/css" href="css/first.css" />
  <link rel="stylesheet" type="text/css" href="css/style.css" />
  <link rel="stylesheet" type="text/css" href="css/sonStyle.css" /> 
  </head>
  
  <body>
    <table>
            <tr>
              <td><img src="images/logo1.png" alt="He and his friends"  class="logo" /></td>
              <td class="tdlogo"><img src="images/logo9.png" alt="He and his friends"  class="logo" /></td>
              <td>
                <form method="post" action="login.html">
               <div>
          <div class="sign">
            <div class="submit">
              <input type="submit" value="Back" >      
            </div>
              <div class="clear"> </div>
          </div>
          </form></td>
            </tr>
          </table>
       
        </div>
     <jsp:include page="bottom.html" flush="true" />
  </body>
</html>
