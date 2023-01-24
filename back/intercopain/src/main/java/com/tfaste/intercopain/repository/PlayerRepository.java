package com.tfaste.intercopain.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.tfaste.intercopain.models.Player;

public interface PlayerRepository extends CrudRepository<Player, Integer>{
    Player findById(int id);
	List<Player> findAll();

    List<Player> findPlayerNameByGameId(Integer gameId);
}
