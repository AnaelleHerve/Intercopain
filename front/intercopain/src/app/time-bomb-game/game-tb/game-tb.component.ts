import { Component, OnInit } from '@angular/core';
import { Player } from '../models/PlayerObject/player';
import { TimeBombService } from '../services/time-bomb-service';
import { Party } from '../models/PartyObject/party';
import { Card } from '../models/CardObject/card';
import { Router } from '@angular/router';
import { delay } from 'rxjs';

@Component({
  selector: 'app-game-tb',
  templateUrl: './game-tb.component.html',
  styleUrls: ['./game-tb.component.css'],
})
export class GameTbComponent implements OnInit {
  picturePath!: string;
  card!: string;
  roles!: string[];
  activeButton: Boolean = true;
  threadCount!: number;

  clickCount: number = 0;

  // Tableau des joueurs
  players: Player[] = this.timeBombService.players;

  party: Party = this.timeBombService.party;

  cardRepartition!: String[];

  player!: Player;

  constructor(
    private timeBombService: TimeBombService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.repartitionCardsInitial();
    this.distribution();
    this.roleChoice();
    console.log(this.party);
  }

  cardTypes = ['back', 'neutral', 'thread', 'bigben'];

  cardPicture(kind: String) {
    if (kind == 'Neutral') {
      this.picturePath = 'neutre.jfif';
    } else if (kind == 'CutThread') {
      this.picturePath = 'filcoupé.jfif';
    } else if (kind == 'BigBen') {
      this.picturePath = 'bigben.jfif';
    }
    return this.picturePath;
  }

  // Pour la répartition de toutes les cartes dans le jeu en fonction du nombre de joueurs
  repartitionCardsInitial() {
    this.cardRepartition = ['BigBen'];

    for (var i = 0; i < this.timeBombService.players.length; i++) {
      this.cardRepartition.push('CutThread');
    }
    while (
      this.cardRepartition.length <
      this.timeBombService.players.length * 5
    ) {
      this.cardRepartition.push('Neutral');
    }
  }

  //Attribution des cartes aux joueurs
  distribution() {
    for (var c = 0; c < this.players.length; c++) {
      this.players[c].cards = [];
    }
    var indexList = [];
    var card = new Card();
    var nbCard = 6 - this.party.round;
    var nbCardsTot = this.timeBombService.players.length * nbCard;
    for (var i = 0; i < nbCardsTot; i++) {
      indexList.push(i);
    }
    for (var j = 0; j < nbCardsTot; j++) {
      var p = Math.floor(j / nbCard); // joueur numéro p
      var c = j % nbCard; // carte numéro c
      var index = Math.round(Math.random() * (indexList.length - 1));
      card = {
        kind: this.cardRepartition[indexList[index]],
        source: 'dos carte.jpg',
        viewable: false,
        active: true,
      };
      indexList.splice(index, 1);
      this.timeBombService.players[p].cards[c] = card;
    }
  }

  roleChoice() {
    if (this.timeBombService.players.length == 4) {
      var al = ['B', 'R'];
      var lastRole = al[Math.round(Math.random())];
      this.roles = ['B', 'B', 'R', lastRole];
    } else if (this.timeBombService.players.length == 5) {
      this.roles = ['B', 'B', 'B', 'R', 'R'];
    } else if (this.timeBombService.players.length == 6) {
      this.roles = ['B', 'B', 'B', 'B', 'R', 'R'];
    } else if (this.timeBombService.players.length == 7) {
      var al = ['B', 'R'];
      var lastRole = al[Math.round(Math.random())];
      this.roles = ['B', 'B', 'B', 'B', 'R', 'R', lastRole];
    } else if (this.timeBombService.players.length == 8) {
      this.roles = ['B', 'B', 'B', 'B', 'B', 'R', 'R', 'R'];
    }

    for (var i = 0; i < this.timeBombService.players.length; i++) {
      var index = Math.round(
        Math.random() * (this.timeBombService.players.length - i - 1)
      );
      this.timeBombService.players[i].role = this.roles[index];
      this.roles.splice(index, 1);
    }
  }

  removedCards: String[] = [];

  onClickCard(playerIndex: number, cardIndex: number) {
    //Changement de l'image à afficher
    this.timeBombService.players[playerIndex].cards[cardIndex].source =
      this.cardPicture(
        this.timeBombService.players[playerIndex].cards[cardIndex].kind
      );
    // On désactive le bouton
    this.timeBombService.players[playerIndex].cards[cardIndex].active = false;
    //On enlève la carte de la liste des cartes
    this.removedCards.push(
      this.timeBombService.players[playerIndex].cards[cardIndex].kind
    );
    this.clickCount += 1;

    // Le tour est fini
    if (this.clickCount == this.players.length) {
      this.activeButton = false;
    }

    //On compte le nombre de fils coupés
    if (
      this.timeBombService.players[playerIndex].cards[cardIndex].kind ==
      'CutThread'
    ) {
      this.threadCount += 1;
    }

    // Si BigBen est retournée ou tous les fils sont coupés
    if (
      this.timeBombService.players[playerIndex].cards[cardIndex].kind ==
        'BigBen' ||
      this.threadCount == this.players.length
    ) {
      setTimeout(() => {
        this.router.navigateByUrl('time-bomb-end');
      }, 4000);
    }
  }

  nextRound() {
    this.clickCount = 0;
    this.activeButton = true;
    this.remainingCards();
    this.party.round += 1;
    this.distribution();

    if (this.timeBombService.party.round == 5) {
      this.router.navigateByUrl('time-bomb-end');
    }
  }

  remainingCards() {
    for (var i = 0; i < this.cardRepartition.length; i++) {
      for (var j = 0; j < this.players.length; j++) {
        if (this.cardRepartition[i] == this.removedCards[j]) {
          this.cardRepartition.splice(i, 1); //On retire du set de cartes les cartes retournées
          this.removedCards.splice(j, 1);
        }
      }
    }
  }

  cardsButton() {
    this.router.navigateByUrl('time-bomb-cards');
  }
  roleButton() {
    this.router.navigateByUrl('time-bomb-role');
  }
}
