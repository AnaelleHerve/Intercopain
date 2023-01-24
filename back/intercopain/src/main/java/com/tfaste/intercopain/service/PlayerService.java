package com.tfaste.intercopain.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tfaste.intercopain.models.Player;
import com.tfaste.intercopain.repository.PlayerRepository;

@Service
public class PlayerService {
	
	private PlayerRepository playerRepository;
	
	@Autowired
	public PlayerService(PlayerRepository playerRepository){
		this.playerRepository = playerRepository;
	}

	public Player createNewPlayer(String playerName) {
		Player player = new Player();
		player.setPlayerName(playerName);
		playerRepository.save(player);
		return player;
	}

	public void joinGame(Integer gameId, String playerName) {
		Player player = new Player();
		player.setPlayerName(playerName);
		player.setGameId(gameId);
		playerRepository.save(player);
		
	}

	public List<Player> getPlayersInGame(Integer gameId){
		return playerRepository.findPlayerNameByGameId(gameId); 
	} 
}
