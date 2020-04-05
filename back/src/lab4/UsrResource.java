package lab4;

import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.Response;
import javax.ejb.EJB;
import javax.ejb.Singleton;


import com.google.gson.Gson;

@Singleton
@Path(value = "/user")
public class UsrResource {
		public static final String hostName = "/TaskListManager/";
		//public static final String hostName = "http://localhost:8080/TaskListManager/";
	 	@EJB
	    private UsrService service;

		@POST
		@Path("/exist")
		public Response checkExist(@FormParam("login") String login,
                String password,
                @Context HttpServletResponse resp,
                @Context HttpServletRequest req) {
			try {
	            if (service.checkLogin(login)) {
	            	return Response.ok().header("Access-Control-Allow-Origin", "*").build();
	            }
	            else {
	            	return Response.serverError().header("Access-Control-Allow-Origin", "*").build();
	            }
			}
			catch (Exception e) {
				e.printStackTrace();
                return Response.serverError().header("Access-Control-Allow-Origin", "*").build();
			}
		}
		
	    @Path("/signup")
	    @POST
	    public void newUser(@FormParam("login") String login,
	                        @FormParam("password") String password,
	                        @Context HttpServletResponse resp,
	                        @Context HttpServletRequest req) {
	        try {
	            Usr user = new Usr(login, password);
	            System.out.println(user.getLogin());
	            System.out.println(user.getPassword());
	            System.out.println(service);
	            if (service.checkLogin(login)) {
	                service.saveUser(user);
	                req.getSession().setAttribute("login", login);
	                req.getSession().setAttribute("points", new ArrayList<Point>());
	                resp.sendRedirect(hostName + "index.html");
	            } else {
	                System.err.println("login exists or data is incorrect");
	            }
	        } catch (Exception e) {
	            System.err.println("Signup error!");
	            e.printStackTrace();
	        }
	    }
			    
	    @POST
	    @Path("/login")
	    public void checkAuth(@FormParam("login") String login,
	                          @FormParam("password") String password,
	                          @Context HttpServletResponse resp,
	                          @Context HttpServletRequest req) {
	        try {
	            boolean test = service.checkUser(login, password);
	            System.out.println(test);
	            if (service.checkUser(login, password)) {
	                req.getSession().setAttribute("login", login);
	                req.getSession().setAttribute("dots", new ArrayList<Point>());
	                resp.sendRedirect(hostName + "index.html");
	            } else {
	            	resp.sendRedirect(hostName + "login.html");
	            }
	        } catch (Exception e) {
	            System.out.println("Login error! (or data is incorrect)");
	            e.printStackTrace();
	        }
	    }

	    @POST
	    @Path("/logout")
	    public void logOut(@Context HttpServletRequest req,
	                       @Context HttpServletResponse resp) {
	        try {
	            req.getSession().invalidate();
	            resp.sendRedirect(hostName + "login.html");
	        } catch (Exception e) { e.printStackTrace(); }
	    }
}
