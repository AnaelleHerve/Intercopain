package controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.tfaste.intercopain.models.Game;

import DTO.GameDTO;
import repository.GameRepository;
import service.GameService;

@RestController
@RequestMapping("/game")
public class GameController {
	
	@Autowired
	GameService gameService;
	
	@Autowired
	HttpSession httpSession;
	
	@RequestMapping(value = "/create/{playerName}", method = RequestMethod.POST)
	public Game createNewGame(@RequestBody GameDTO gameDTO, @PathVariable String playerName) {
		
		Game game = gameService.createNewGame(playerName, gameDTO);
		game.setNbPlayers(gameDTO.getNbPlayers());
		httpSession.setAttribute("gameId", game.getId());
		return game;
	}
	
	@RequestMapping(value = "/list", method = RequestMethod.GET)
	public List<Game> getGamesToJoin(){
		return gameService.getGamesToJoin();
	}
	
	@RequestMapping(value = "/join/{playerName}", method = RequestMethod.POST)
	public Game joinGame(@RequestBody GameDTO gameDTO, @PathVariable String playerName) {
		Game game = gameService.joinGame(playerName, gameDTO);
		return game;
	}
	
}