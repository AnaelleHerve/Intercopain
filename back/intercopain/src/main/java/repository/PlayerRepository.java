package repository;

import org.springframework.data.repository.CrudRepository;

import com.tfaste.intercopain.models.Player;

public interface PlayerRepository extends CrudRepository<Player, Long>{

}
