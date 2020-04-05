package lab4;

import javax.ejb.*;
import javax.persistence.*;

@Stateful
public class UsrService {

	
    private EntityManagerFactory factory = Persistence.createEntityManagerFactory("JPAUNIT");
    private EntityManager em = factory.createEntityManager();
    

    public UsrService(){
    	factory = Persistence.createEntityManagerFactory("JPAUNIT");
    }

    public void saveUser(Usr user){
        em.getTransaction().begin();
        em.persist(user);
        em.getTransaction().commit();
    }

    public boolean checkUser(String login, String password){
        try {
        	Usr user = (Usr) em.createQuery(" from Usr where login = :login")
                                    .setParameter("login", login).getSingleResult();

            if (user != null) {
                if (password.hashCode() == user.getPassword()) return true;
            }
            return false;
        } catch (NoResultException e){ return false; }
    }

    public boolean checkLogin(String login){
        try {
            Usr user = (Usr) em.createQuery(" from Usr where login = :login")
                    .setParameter("login", login).getSingleResult();
            if (user != null)
                return false;
            else
                return true;
        } catch (NoResultException e){ return true; }
    }


}
