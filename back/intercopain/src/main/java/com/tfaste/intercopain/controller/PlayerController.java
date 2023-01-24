package com.tfaste.intercopain.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.tfaste.intercopain.models.Game;
import com.tfaste.intercopain.models.Player;
import com.tfaste.intercopain.service.GameService;
import com.tfaste.intercopain.service.PlayerService;

@RestController
@RequestMapping("/game")
public class PlayerController {

    @Autowired
	GameService gameService;

    @Autowired
	PlayerService playerService;

    @RequestMapping(value = "/player", method = RequestMethod.POST)
	public Player createNewPlayer() {
		Player player = playerService.createNewPlayer("etst");
		// httpSession.setAttribute("gameId", game.getId());
		return player;
	}

	@RequestMapping(value = "/playerList", method = RequestMethod.GET)
	public List<Player> getPlayerInGame(@RequestBody Integer gameId) {
		List<Player> player = playerService.getPlayersInGame(gameId);
		return player;
	}

}
