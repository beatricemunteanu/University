package presentationServlets;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import core.Room;

/**
 * Servlet implementation class MainPage
 */
@WebServlet("/MainPage")
public class MainPage extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public MainPage() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		SimpleDateFormat format = new SimpleDateFormat("mm/dd/yyyy");
		
	//try {
		//  Date checkin = format.parse(request.getParameter("checkin"));
		//	Date checkout = format.parse(request.getParameter("checkout"));
			//String roomType=request.getParameter("roomType");
			//System.out.println(checkin);
			//System.out.println(checkout);
			System.out.println("ok");
			
			//request.setAttribute("Maincheckin",checkin);
			//request.getServletContext().getRequestDispatcher("/PresentationPage").forward(request, response);
	
			//request.setAttribute("Maincheckout",checkout);
		//	request.getServletContext().getRequestDispatcher("/PresentationPage").forward(request, response);
	
		//	request.setAttribute("MainRoomType",roomType);
			//request.getServletContext().getRequestDispatcher("/PresentationPage").forward(request, response);
	
			
		List<Room> allRooms=new LinkedList<>();
		Room r=new Room(1,1,"Single");
		allRooms.add(r);
		//request.setAttribute("rooms",allRooms);
		//request.getServletContext().getRequestDispatcher("/PresentationPage").forward(request, response);
			
			
//	} catch (ParseException e) {
		// TODO Auto-generated catch block
	//	e.printStackTrace();
//	}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
