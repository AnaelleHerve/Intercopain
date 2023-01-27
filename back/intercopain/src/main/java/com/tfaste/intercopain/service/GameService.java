package com.tfaste.intercopain.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.Random;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.yaml.snakeyaml.util.ArrayUtils;

import com.tfaste.intercopain.DTO.GameDTO;
import com.tfaste.intercopain.enums.GameStatus;
import com.tfaste.intercopain.enums.Role;
import com.tfaste.intercopain.models.Card;
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

	// Services pour l'initialisation d'un jeu (affichage et création des parties)
	
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
	

	//Service pour le jeu

	// Repartition des cartes en fonction du nombre de joueurs
	public String[] repartitionCardsGame(Integer nbPlayers){
		String[] cards = new String[nbPlayers*5] ;
		Arrays.fill(cards,0,1,"BigBen");
		System.out.println(cards.length);
		Arrays.fill(cards,1,nbPlayers+1,"CutWire");
		Arrays.fill(cards,nbPlayers+1, cards.length,"Neutral");
		return cards ;
	}

	// Attribution des cartes aux joueurs
	public void distributionCards(String[] cards, Player[] players, Integer round){
		int nbCardsToDistrib = (6-round)*players.length ;
		for (Player p : players){
			String[] playerCards = new String[6-round] ;
			for (var i = 0 ; i< 6-round  ; i ++){
				Integer index = (int) (Math.random()*nbCardsToDistrib);
				String playerCard = cards[index] ;		// Sélection d'une carte au hasard parmi les cartes à distribuer
				Arrays.fill(cards,index,index+1,cards[cards.length]);	//On enlève la carte des cartes à distribuer
				Arrays.fill(playerCards,i, i+1,playerCard);		//On enregistre la carte dans les cartes du joueur
				nbCardsToDistrib = nbCardsToDistrib - 1 ;		//On enlève la carte des cartes à distribuer
			}
			p.setCards(playerCards);	//On enregistre les cartes du joueurs
			playerRepository.save(p) ;
		}
	}


	//Attribution des rôles aux joueurs
	public Role[] distributionRoles(Integer nbPlayers, Player[] players){
		Role[] role = new Role[nbPlayers];
		if(nbPlayers==4){
			String[] randomRole={"BLUE","RED"} ;
			String lastRole=randomRole[(int) Math.random()];
			Arrays.fill(role,0, 2,"BLUE");	
			Arrays.fill(role,2, 3,"RED");	
			Arrays.fill(role,3, 4,lastRole);	
		}
		else if(nbPlayers==5){
			Arrays.fill(role,0, 3,"BLUE");	
			Arrays.fill(role,3, 5,"RED");	
		}
		else if(nbPlayers==6){
			Arrays.fill(role,0, 4,"BLUE");	
			Arrays.fill(role,4, 6,"RED");	
		}
		else if(nbPlayers==7){
			String[] randomRole={"BLUE","RED"} ;
			String lastRole=randomRole[(int) Math.random()];
			Arrays.fill(role,0, 4,"BLUE");	
			Arrays.fill(role,4, 6,"RED");	
			Arrays.fill(role,6, 7,lastRole);	
		}
		else if(nbPlayers==8){
			Arrays.fill(role,0, 5,"BLUE");	
			Arrays.fill(role,5, 8,"RED");
		}
		
		for (var i=0; i<nbPlayers;i++){
			Integer index = (int) (Math.random()*(nbPlayers-i-1)) ;
			players[i].setRole(role[index]);
		}
		return role ;
	}


	
}
