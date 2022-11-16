package service;

import org.springframework.beans.factory.annotation.Autowired;

import repository.PlayerRepository;

public class PlayerService {
	
	private final PlayerRepository playerRepository;
	
	@Autowired
	public PlayerService(PlayerRepository playerRepository){
		this.playerRepository = playerRepository;
	}
}
