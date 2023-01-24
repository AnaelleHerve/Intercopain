import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Player } from '../models/PlayerObject/player';
import { TimeBombService } from '../services/time-bomb-service';
import { InitGameService } from '../services/init-game.service';
import { Party } from '../models/PartyObject/party';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreatePartyDialogComponent } from 'src/app/time-bomb-game/create-party-dialog/create-party-dialog.component';
import { JoinPartyDialogComponent } from '../join-party-dialog/join-party-dialog.component';

@Component({
  selector: 'app-home-page-tb',
  templateUrl: './home-page-tb.component.html',
  styleUrls: ['./home-page-tb.component.css'],
})
export class HomePageTbComponent implements OnInit {
  pseudo!: String;
  player!: Player;
  gamesToJoin!: Party[];
  gameName!: String;
  userName!: String;
  list: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private timeBombService: TimeBombService,
    private initGameService: InitGameService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.listGame();
  }

  openDialogPartyCreation() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.position = {
      top: '100px',
    };
    dialogConfig.width = '800px';
    dialogConfig.height = '500px';
    dialogConfig.panelClass = 'custom-panel-class';

    const dialogRef = this.dialog.open(
      CreatePartyDialogComponent,
      dialogConfig
    );
  }

  openDialogJoinParty(gameName: String, gameId: Int8Array) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.position = {
      top: '100px',
    };
    dialogConfig.width = '800px';
    dialogConfig.height = '500px';

    dialogConfig.data = {
      name: gameName,
      id: gameId,
    };

    this.dialog.open(JoinPartyDialogComponent, dialogConfig);
  }

  createGame() {
    this.initGameService.createGame(this.gameName, this.userName).subscribe();
    this.router.navigateByUrl('waiting-room');
  }

  listGame() {
    this.initGameService.listGame().subscribe((data) => {
      this.list = data;
    });
  }
}
