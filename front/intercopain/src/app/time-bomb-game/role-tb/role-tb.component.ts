import { Component, OnInit } from '@angular/core';
import { TimeBombService } from '../time-bomb-service';
import { Player } from '../models/PlayerObject/player';
import { Party } from '../models/PartyObject/party';
import { Router } from '@angular/router';

@Component({
  selector: 'app-role-tb',
  templateUrl: './role-tb.component.html',
  styleUrls: ['./role-tb.component.css'],
})
export class RoleTbComponent implements OnInit {
  roles!: String[];
  pathRole!: String;

  constructor(
    private timeBombService: TimeBombService,
    private router: Router
  ) {}

  // Tableau des joueurs
  players: Player[] = this.timeBombService.players;

  party: Party = this.timeBombService.party;

  ngOnInit(): void {
    this.pathRole = 'role g1 tb.jfif';
  }

  roleChoice() {
    // Liste des roles en fonction du nombre de joueurs
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
    //Attribution du role aux joueurs
    for (var i = 0; i < this.timeBombService.players.length; i++) {
      var index = Math.round(
        Math.random() * (this.timeBombService.players.length - i - 1)
      );
      this.timeBombService.players[i].role = this.roles[index];
      this.roles.splice(index, 1);
    }

    //Image a afficher pour le role
    if (this.timeBombService.players[i].role == 'B') {
      this.pathRole = 'role g1 tb.jfif';
    } else if (this.timeBombService.players[i].role == 'G') {
      this.pathRole = 'role m1 tb.jfif';
    }
  }

  returnButton() {
    this.router.navigateByUrl('time-bomb-game');
  }
}
