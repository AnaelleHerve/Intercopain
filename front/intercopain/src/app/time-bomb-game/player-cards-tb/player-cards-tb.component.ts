import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TimeBombService } from '../services/time-bomb-service';
import { Player } from '../models/PlayerObject/player';

@Component({
  selector: 'app-player-cards-tb',
  templateUrl: './player-cards-tb.component.html',
  styleUrls: ['./player-cards-tb.component.css'],
})
export class PlayerCardsTbComponent implements OnInit {
  constructor(
    private router: Router,
    private timeBombService: TimeBombService
  ) {}

  players: Player[] = this.timeBombService.players;

  ngOnInit(): void {
    // this.timeBombService.players[0].cards = [
    //   { kind: 'Neutral', source: 'neutre.jfif', viewable: true, active: true },
    //   { kind: 'Neutral', source: 'neutre.jfif', viewable: true, active: true },
    //   { kind: 'Neutral', source: 'neutre.jfif', viewable: true, active: true },
    // ];
  }

  returnButton() {
    this.router.navigateByUrl('time-bomb-game');
  }
}
