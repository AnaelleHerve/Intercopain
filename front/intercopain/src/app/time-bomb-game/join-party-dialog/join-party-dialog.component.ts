import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CreatePartyDialogComponent } from '../create-party-dialog/create-party-dialog.component';
import { InitGameService } from '../services/init-game.service';

@Component({
  selector: 'app-join-party-dialog',
  templateUrl: './join-party-dialog.component.html',
  styleUrls: ['./join-party-dialog.component.css'],
})
export class JoinPartyDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,
    private initGameService: InitGameService,
    private dialogRef: MatDialogRef<CreatePartyDialogComponent>
  ) {}

  userName!: String;
  gameName = this.data.name;

  ngOnInit(): void {
    console.log(this.data.name);
  }

  joinGame() {
    this.initGameService.joinGame(this.data.id, this.userName).subscribe();
    this.dialogRef.close();
    this.router.navigateByUrl('waiting-room');
  }
}
