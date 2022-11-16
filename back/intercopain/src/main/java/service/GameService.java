package service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tfaste.intercopain.enums.GameStatus;
import com.tfaste.intercopain.models.Game;
import com.tfaste.intercopain.models.Player;

import DTO.GameDTO;
import repository.GameRepository;

@Service
public class GameService {
	
	private final GameRepository gameRepository;
	
	@Autowired
	public GameService(GameRepository gameRepository) {
		this.gameRepository = gameRepository;
	}
	
	public Game createNewGame(String playerName, GameDTO gameDTO) {
		Game game = new Game();
		Player player = new Player();
		player.setName(playerName);
		game.addPlayer(player);
		gameRepository.save(game);
		return game;
	}
	
	public List<Game>getGamesToJoin(){
		return gameRepository.findAll();
	}
	
	public Game joinGame(String playerName, GameDTO gameDTO) {
		Game game = gameRepository.findById(gameDTO.getId());
		Player player = new Player();
		player.setName(playerName);
		game.addPlayer(player);
		if (game.getNbPlayers()==game.getSlotsFilled()) {
			game.setGameStatus(GameStatus.ONGOING);
		}
		gameRepository.save(game);
		return game;
	}
	
}
