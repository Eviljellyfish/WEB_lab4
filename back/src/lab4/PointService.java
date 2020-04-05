package lab4;

import java.util.ArrayList;
import java.util.List;

import javax.ejb.Stateful;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.Query;

import lab4.Point;

@Stateful
public class PointService {
	
    EntityManagerFactory fact = Persistence.createEntityManagerFactory("JPAUNIT");
    EntityManager em = fact.createEntityManager();

    public void savePoint(Point point){
        em.getTransaction().begin();
        em.persist(point);
        em.getTransaction().commit();
    }
    
    public void deletePoint(long id) {
    	em.getTransaction().begin();
    	Point point = em.find(Point.class, id);
    	em.remove(point);
    	em.getTransaction().commit();
    }
    
    public void deleteAllPoints() {
    	em.getTransaction().begin();
    	Query q1 = em.createQuery("DELETE FROM Point");
    	q1.executeUpdate();
    	em.getTransaction().commit();
    }
    
    public List<Point> getAllPoints(){
        return  em.createQuery("from Point ").getResultList();
    }
}
