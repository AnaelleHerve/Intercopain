package com.tfaste.intercopain.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tfaste.intercopain.DTO.GameDTO;
import com.tfaste.intercopain.enums.GameStatus;
import com.tfaste.intercopain.models.Game;
import com.tfaste.intercopain.models.Player;
import com.tfaste.intercopain.repository.GameRepository;
import com.tfaste.intercopain.repository.PlayerRepository;

@Service
public class GameService {
	
	private GameRepository gameRepository;
	private PlayerRepository playerRepository;
	
	@Autowired
	public GameService(GameRepository gameRepository) {
		this.gameRepository = gameRepository;
	}

	@Autowired
	public void PlayerService(PlayerRepository playerRepository) {
		this.playerRepository = playerRepository;
	}
	
	public Game createNewGame(String gameName, String playerName) {
		//Création d'une partie et enregistrement de son nom
		Game game = new Game();
		game.setGameName(gameName);
		gameRepository.save(game);
		System.out.println(game.getGameId());
		//Création du joueur et enregistrement de son nom et de la partie qu'il rejoint
		Player player = new Player();
		player.setPlayerName(playerName);
		player.setGameId(game.getGameId());
		playerRepository.save(player);
		return game;
	}
	
	public List<Game>getGamesToJoin(){
		return gameRepository.findAll(); 
	}
	

	
}
