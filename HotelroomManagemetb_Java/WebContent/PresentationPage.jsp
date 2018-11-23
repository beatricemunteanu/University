<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<link rel="stylesheet" type="text/css" href="css/style.css">
<script src="https://code.jquery.com/jquery-3.1.1.js"></script>
<script src="scripts/range.js"> </script>
<title>Insert title here</title>
</head>
<body background="images/bg.png" style="background-size: cover;  background-attachment: fixed;";> 
   
 <main id="PresenationMain">
  <form action="">
  <div id="mainInput">
         <input type="date" name="checkout" >
         <input  type="date" name="checkout" >
         <select name="roomType">
                 <option value="single">Single</option>
                 <option value="twin">Twin</option>
                 <option value="suite">Suite</option>
         </select>
          <input type="submit">

        <div class="range-container">
         <p style="position:absolute; left:-35% ;top:-95%; font-size:20px;color:white; font-family:Calibri"> Max Price</p>
                    <label class="range">
				    <input class="range-input" type="range" min="10" max="500"  step="1" value="500">
                   <span class="range-box">
                   <span class="range-counter">1000</span>
                   </span>
                   </label>
          </div> 
        </div> 
   
   <div id ="details">
          <p class="TitleAddOpt"> Addition Options </p>
           <input type="checkbox"  value="minibar">  mini bar<br>
           <input type="checkbox" value="parkingSpot">  parking spot <br>
           <input type="checkbox"  value="airCond">  air conditioner <br>
           <input type="checkbox" value="balcony"> balcony   <br>
           <input type="checkbox" value="fridge"> fridge   <br>
           <input type="checkbox" value="tv"> TV   <br>
           <input type="checkbox" value="seeView"> see view   <br>
           <input type="checkbox" value="rs"> room service   <br>
  
   </div>
  
   </form>
  
   <div id="wrapperPresentation">
        
        <%@ page import="java.util.List" %>
        <%@ page import="core.Room" %>
        <%@ page import="java.util.LinkedList" %>
        <% 
          List<Room> rooms=new LinkedList<>();
          rooms = (List<Room>)request.getAttribute("rooms");
          
          
          for(int i = 0; i < rooms.size(); i++) {
               %>
              <div class="wrapperRoom">
              <% 
        	      String pathImg ="images/"+ rooms.get(i).getId_room() + ".jpg";%>
              <figure>
              <img class="imgRoom" src="<%=pathImg%>">
              </figure>
              <div class="wrapperDetails">
                 <% String type = rooms.get(i).getType();%>
                 <div class="typeRoom"> <% out.write(type); %> </div>
                 <div class="price"> 100 euro </div>
                 <button class="BReserve"> RESERVE </button>
                 <br>
                 <%  if(rooms.get(i).isAc())
                  {
                	  %> <span> air conditioner  | </span> <% 
                  }
                  
                  if(rooms.get(i).isBalcony())
                  {  
                	  %> <span> balcony  | </span> <% 
                  }
                  if(rooms.get(i).isMinibar())
                  {
                	  %> <span> minibar  | </span> <% 
                  }
                  if(rooms.get(i).isParking())
                  {
                	  %> <span> parking spot | </span> <% 
                  }
                  if(rooms.get(i).isRoom_service())
                  {
                	  %> <span> room service | </span> <% 
                  }
                  if(rooms.get(i).isSeaview())
                  {
                	  %> <span> sea view  | </span> <% 
                  }
                  if(rooms.get(i).isTv())
                  {
                	  %> <span> TV |  </span> <% 
                  }
                  if(rooms.get(i).isWifi())
                  {
                	  %> <span> wifi | </span> <% 
                  }
        	 %>
        	 </div>
   
        	</div>  
         <% }  %> 
         
        
        </div>
        
   </div>
   
   </main>
  
  
</body>
</html>