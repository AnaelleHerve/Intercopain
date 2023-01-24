package com.tfaste.intercopain.models;

import java.util.ArrayList;

import javax.persistence.*;

// import org.springframework.ldap.odm.annotations.Entry;

import com.tfaste.intercopain.enums.GameStatus;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="Game")
@Getter
@Setter

public class Game {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="Id_game")
	private Integer gameId ;
	
	@Column(name="Name")
	private String gameName ;
	
	@Column(name="Actual_round")
	private Integer round = 0;
	
	@Column(name="Nb_players")
	private Integer nbPlayers;
		
	@Enumerated(EnumType.STRING)
	@Column(name="Game_status")
	private GameStatus gameStatus = GameStatus.NOT_STARTED;
	
	// @Column(name="Players")
	// private Player[] players = new Player[8];
	// ArrayList<Player> players = new ArrayList<>() ;


	// public void addPlayer(Game game, Player player){
	// 	game.players.add(player) ;
	// }
}

