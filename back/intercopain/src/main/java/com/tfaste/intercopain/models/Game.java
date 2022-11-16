package com.tfaste.intercopain.models;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.tfaste.intercopain.enums.GameStatus;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Game {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private String name;
	
	private Integer round;
	
	private Integer nbPlayers;
	
	private Integer slotsFilled;
	
	@Enumerated(EnumType.STRING)
	private GameStatus gameStatus;
	
	@ManyToOne
	private Player[] players;
	
	public void addPlayer(Player player) {
		players[slotsFilled-1]=player;
		slotsFilled+=1;
	}
}