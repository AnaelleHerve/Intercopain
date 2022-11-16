package com.tfaste.intercopain.models;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.tfaste.intercopain.enums.Kind;

import lombok.Getter;
import lombok.Setter;

@Entity
@Setter
@Getter
public class Card {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@Enumerated(EnumType.STRING)
	private Kind kind;
}
