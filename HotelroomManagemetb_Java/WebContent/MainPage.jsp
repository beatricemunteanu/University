<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<link rel="stylesheet" type="text/css" href="css/style.css">

</head>
<body background="images/hotel.jpg" style="background-size: cover;">
     
        <p style = "text-align:center; font-family:Calibri; font-size:60px"> Welcome </p>
        <div style ="box-sizing: border-box;margin-left:30%;margin-right:30%;height:200px;padding-top:1%; 
              background-color: rgba(0, 0, 0, 0.5);text-align:center">
        <p id = "desc">   Stefan here comes your part </p>
        <form action="" method="post" style="text-align:center;">
         <input type="date" name="checkin">
         <input  type="date" name="checkout">
         <select name="roomType">
                 <option value="single">Single</option>
                 <option value="twin">Twin</option>
                 <option value="suite">Suite</option>
         </select>
         <input type="submit">
           <% String checkin=(String)request.getAttribute("checkin");
         	if(checkin!=null && checkin.equals("failed"))
         	{%><p class="desc">Invalid checkin date <% return;} 
         	String checkout=(String)request.getAttribute("checkout");
         	if(checkout!=null && checkout.equals("failed"))
         	{%><p class="desc">Invalid checkout date <% return;}
         	String roomType=(String)request.getAttribute("roomType");
         	if(roomType!=null && roomType.equals("failed"))
         	{%><p class="desc">Invalid room type </p> return; <%}
         	String search=(String)request.getAttribute("search");
         	String no_rooms=(String)request.getAttribute("no_rooms");
          	if(search!=null && search.equals("failed"))
        	{%><p class="desc"> Search failed.Please try again!<%} 
            if(no_rooms!=null && no_rooms.equals("failed"))
          	{%> <p class="desc"> No rooms available<% }
          %>
         </form>
         </div>

</body>
</html>