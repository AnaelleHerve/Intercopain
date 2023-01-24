import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-waiting-room',
  templateUrl: './waiting-room.component.html',
  styleUrls: ['./waiting-room.component.css'],
})
export class WaitingRoomComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  quitButton() {
    this.router.navigateByUrl('home');
  }
}
