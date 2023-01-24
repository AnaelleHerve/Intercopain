package com.tfaste.intercopain.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.tfaste.intercopain.models.Game;

public interface GameRepository extends CrudRepository<Game, Integer>{
	Game findById(int id);
	List<Game> findAll();
}
