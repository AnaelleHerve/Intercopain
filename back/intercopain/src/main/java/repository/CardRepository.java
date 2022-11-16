package repository;

import org.springframework.data.repository.CrudRepository;

import com.tfaste.intercopain.models.Card;

public interface CardRepository extends CrudRepository<Card, Long>{

}
