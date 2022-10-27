import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from '../models/PlayerObject/player';
import { TimeBombService } from '../time-bomb-service';

@Component({
  selector: 'app-home-page-tb',
  templateUrl: './home-page-tb.component.html',
  styleUrls: ['./home-page-tb.component.css'],
})
export class HomePageTbComponent implements OnInit {
  pseudo!: String;
  player!: Player;

  constructor(
    private router: Router,
    private timeBombService: TimeBombService
  ) {}

  ngOnInit(): void {}

  onSubmitPseudo() {
    this.timeBombService.addPlayer(
      this.timeBombService.players.length + 1,
      this.pseudo,
      '',
      []
    );
    console.log(this.timeBombService.players);
  }

  joinParty() {
    this.router.navigateByUrl('time-bomb-game');
  }
}
