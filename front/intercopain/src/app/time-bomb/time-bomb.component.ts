import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-time-bomb',
  templateUrl: './time-bomb.component.html',
  styleUrls: ['./time-bomb.component.css'],
})
export class TimeBombComponent implements OnInit {
  nbplayers!: number;
  roles!: string[];
  yourRole!: string;

  constructor() {}

  onSubmitNbPlayers() {
    console.log(this.nbplayers);
    return this.nbplayers;
  }

  ngOnInit(): void {}
}
