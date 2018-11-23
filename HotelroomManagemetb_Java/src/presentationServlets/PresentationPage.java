package presentationServlets;

import java.io.IOException;
import java.util.LinkedList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import core.Room;

/**
 * Servlet implementation class PresentationPage
 */
@WebServlet("/PresentationPage")
public class PresentationPage extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public PresentationPage() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		
		List<Room> allRooms=new LinkedList<>();
		Room r=new Room(1,1,"Single");
		allRooms.add(r);
		Room r2=new Room(1,1,"Twin");
		allRooms.add(r2);
		allRooms.add(r2);
		allRooms.add(r2);
		
		request.setAttribute("rooms", allRooms);
	    request.getRequestDispatcher("PresentationPage.jsp").forward(request, response);
		
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
