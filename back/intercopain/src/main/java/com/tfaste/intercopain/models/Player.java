package com.tfaste.intercopain.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;

import com.tfaste.intercopain.enums.Role;

import lombok.Getter;
import lombok.Setter;

@Entity
@Setter
@Getter
public class Player {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="Id_player")
	private Long playerId;
	
	@Column(name="Cards")
	private String[] cards;
	
	@Column(name="Name")
	private String playerName;
	
	@Column(name="Role")
	@Enumerated(EnumType.STRING)
	private Role role;

	@Column(name="game_id")
	// @JoinColumn()
	private int gameId;
	
}
