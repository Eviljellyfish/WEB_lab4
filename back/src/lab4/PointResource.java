package lab4;

import java.util.List;

import javax.ejb.*;
import javax.ejb.Stateful;
import javax.enterprise.context.SessionScoped;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.HEAD;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.Response;

import com.google.gson.Gson;

@Stateful
@SessionScoped
@Path("/point")
public class PointResource {
	
	@EJB
	PointService pointService = new PointService();
	
	@POST
	@Path("/check")
	@Produces(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	public Response check(@FormParam("X") float x,
            @FormParam("Y") float y ,
            @FormParam("R") float r,
            @Context HttpServletRequest req,
            @Context HttpServletResponse resp) {
			Point point = new Point(x, y, r);
            if ((x >= 0 && y >= 0 && x <= (r/2) && y <= r) ||
                    (x <= 0 && y <= 0 && y/(-r/2) <= (x+r)/r) ||
                        (x >= 0 && y <= 0 && x * x + y * y <= r * r))
                point.setChecked(true);
            else
                point.setChecked(false);
            //List<Point> list = (List<Point>)req.getSession().getAttribute("points");
            //list.add(point);
            pointService.savePoint(point);
            Gson gson = new Gson();
            String json = gson.toJson(point);
            return Response.ok(json).header("Access-Control-Allow-Origin", "*").build();
	}
	
	
	@GET
	@Path("/getpoints")
	@Produces(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	public Response getPoints() {
		Gson gson = new Gson();
		String json = gson.toJson(pointService.getAllPoints());
		return Response.ok(json).header("Access-Control-Allow-Origin", "*").build();
	}
	
	@POST
	@Path("/deletepoint")
	public Response deletePoint(@FormParam("pointid") long id) {
		pointService.deletePoint(id);
		return Response.ok().header("Access-Control-Allow-Origin", "*").build();
	}
	
	@HEAD
	@Path("/clear")
	public Response clearPoints() {
		pointService.deleteAllPoints();
		return Response.ok().header("Access-Control-Allow-Origin", "*").build();
	}
}
