import { Injectable } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Player } from './models/PlayerObject/player';
import { Party } from './models/PartyObject/party';
import { Card } from './models/CardObject/card';

@Injectable({
  providedIn: 'root',
})
export class TimeBombService {
  constructor() {}

  players: Player[] = [
    { id: 1, pseudo: 'pseudo', role: 'role', cards: [] },
    { id: 1, pseudo: 'mine', role: 'role', cards: [] },
    { id: 1, pseudo: 'pseudo', role: 'role', cards: [] },
    { id: 1, pseudo: 'pseudo', role: 'role', cards: [] },
  ];
  party: Party = {
    id: 1,
    name: 'Time Bomb Party',
    round: 1,
    nbPlayers: 0,
  };

  addPlayer(id: number, pseudo: String, role: String, cards: Card[]) {
    this.players.push({
      id: id,
      pseudo: pseudo,
      role: role,
      cards: cards,
    });
  }
}
