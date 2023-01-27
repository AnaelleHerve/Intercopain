package com.tfaste.intercopain.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.util.Pair;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.tfaste.intercopain.DTO.GameDTO;
import com.tfaste.intercopain.models.Game;
import com.tfaste.intercopain.models.GameCreatingParams;
import com.tfaste.intercopain.models.Player;
import com.tfaste.intercopain.service.GameService;
import com.tfaste.intercopain.service.PlayerService;


@RestController
@RequestMapping("/game")
public class GameController {
	
	@Autowired
	GameService gameService;

	@Autowired
	PlayerService playerService;
	
	@Autowired
	HttpSession httpSession;
	
	@RequestMapping(value = "/create", method = RequestMethod.POST)
	public Game createNewGame(@RequestBody GameCreatingParams gameInitParams) {
		Game game = gameService.createNewGame(gameInitParams.getGameName(),gameInitParams.getPlayerName());
		// Player player = playerService.createNewPlayer("playerName");
		// httpSession.setAttribute("gameId", game.getId());
		return game;
	}
	
	
	//On veut afficher le nom des jeux crées et les joueurs dans la partie
	@RequestMapping(value = "/list", method = RequestMethod.GET)
	public String[][] getGamesToJoin(){
		List<Game> gamesToJoin = gameService.getGamesToJoin();	//Liste avec toutes les parties
		String[][] GamesPlayersList = new String[gamesToJoin.size()][3];
		// On récupère les joueurs de chaque partie
		for (int i=0;i<gamesToJoin.size(); i++){
			int gId = gamesToJoin.get(i).getGameId();	//On récupère l'id de chaque partie
			List<Player> playersInGame = playerService.getPlayersInGame(gId);	//On récupère les joueurs de cette partie
			String playersInGamesName = "";	//Liste des noms des joueurs
			for (int j=0; j<playersInGame.size(); j++){
				playersInGamesName=playersInGamesName +playersInGame.get(j).getPlayerName() + "\r\n";	//On met le nom de chaque joueur dans la liste
			}
			GamesPlayersList[i][0] = gamesToJoin.get(i).getGameName();
			GamesPlayersList[i][1] =playersInGamesName;
			GamesPlayersList[i][2] =Integer.toString(gamesToJoin.get(i).getGameId());
		}
		return GamesPlayersList;
	}
	
	@RequestMapping(value = "/join/{gameId}", method = RequestMethod.POST)
	public void joinGame(@PathVariable Integer gameId, @RequestBody String playerName) {
		playerService.joinGame(gameId, playerName);
	}


	@RequestMapping(value = "/test", method = RequestMethod.GET)
	public String[] test() {
		return gameService. repartitionCardsGame(8);
	}
}