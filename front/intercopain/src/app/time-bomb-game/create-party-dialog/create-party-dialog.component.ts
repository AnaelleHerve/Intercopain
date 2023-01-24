import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { InitGameService } from '../services/init-game.service';

@Component({
  selector: 'app-create-party-dialog',
  templateUrl: './create-party-dialog.component.html',
  styleUrls: ['./create-party-dialog.component.css'],
})
export class CreatePartyDialogComponent implements OnInit {
  userName!: String;
  gameName!: String;

  constructor(
    private dialogRef: MatDialogRef<CreatePartyDialogComponent>,
    private router: Router,
    private initGameService: InitGameService
  ) {}

  ngOnInit() {}

  createGame() {
    this.initGameService.createGame(this.gameName, this.userName).subscribe();
    this.dialogRef.close();
    this.router.navigateByUrl('waiting-room');
  }
}
