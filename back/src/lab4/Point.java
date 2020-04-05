package lab4;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name= "s208059_points")
public class Point {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
	private long id;
	
	@Basic
    @Column(name = "x", nullable = true, precision = 0)
	private float x;
	
	@Basic
    @Column(name = "y", nullable = true, precision = 0)
	private float y;
	
	@Basic
    @Column(name = "r", nullable = true, precision = 0)
	private float r;
	
	@Basic
    @Column(name = "checked", nullable = true)
	private boolean checked;
	
	public Point() {
		
	}
	
	public Point(float x, float y, float r) {
		this.x = x;
		this.y = y;
		this.r = r;
	}
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public float getX() {
		return x;
	}
	public void setX(float x) {
		this.x = x;
	}
	public float getY() {
		return y;
	}
	public void setY(float y) {
		this.y = y;
	}
	public float getR() {
		return r;
	}
	public void setR(float r) {
		this.r = r;
	}
	public boolean getChecked() {
		return checked;
	}
	public void setChecked(boolean checked) {
		this.checked = checked;
	}
}
