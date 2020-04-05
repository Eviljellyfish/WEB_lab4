package lab4;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name= "s208059_users")
public class Usr {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id", nullable = false)
	private int id;
	@Column(name = "login", nullable = false)
    private String login;
    @Column(name = "password", nullable = false)
    private int password;

    public Usr(){};
    public Usr(String login, String password){
        this.login = login;
        this.password = password.hashCode();
    }

   
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

  
    public int getPassword() {
        return password;
    }

    public void setPassword(int password) {
        this.password = password;
    }

    public void setPassword(String password) {
        this.password = password.hashCode();
    }

    
    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }
}
