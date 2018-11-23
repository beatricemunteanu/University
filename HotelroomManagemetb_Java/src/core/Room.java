package core;

public class Room {
	int id_room;
	int floor;
	String type;
	boolean room_service =true;
	boolean ac=true;
	boolean parking=true;
	boolean tv=true;
	boolean seaview=true;
	boolean minibar=true;
	boolean wifi=true;
	boolean balcony=true;
	public int getId_room() {
		return id_room;
	}
	public void setId_room(int id_room) {
		this.id_room = id_room;
	}
	public int getFloor() {
		return floor;
	}
	public void setFloor(int floor) {
		this.floor = floor;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public boolean isRoom_service() {
		return room_service;
	}
	public void setRoom_service(boolean room_service) {
		this.room_service = room_service;
	}
	public boolean isAc() {
		return ac;
	}
	public void setAc(boolean ac) {
		this.ac = ac;
	}
	public boolean isParking() {
		return parking;
	}
	public void setParking(boolean parking) {
		this.parking = parking;
	}
	public boolean isTv() {
		return tv;
	}
	public void setTv(boolean tv) {
		this.tv = tv;
	}
	public boolean isSeaview() {
		return seaview;
	}
	public void setSeaview(boolean seaview) {
		this.seaview = seaview;
	}
	public boolean isMinibar() {
		return minibar;
	}
	public void setMinibar(boolean minibar) {
		this.minibar = minibar;
	}
	public boolean isWifi() {
		return wifi;
	}
	public void setWifi(boolean wifi) {
		this.wifi = wifi;
	}
	public boolean isBalcony() {
		return balcony;
	}
	public void setBalcony(boolean balcony) {
		this.balcony = balcony;
	}
	public Room(int id_room, int floor, String type) {
		super();
		this.id_room = id_room;
		this.floor = floor;
		this.type = type;
	}
}