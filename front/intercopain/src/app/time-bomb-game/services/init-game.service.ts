import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Player } from '../models/PlayerObject/player';

@Injectable({
  providedIn: 'root',
})
export class InitGameService {
  constructor(private http: HttpClient) {}

  public createGame(gameName: String, playerName: String) {
    return this.http.post<{
      id: Int8Array;
      name: string;
      round: Int8Array;
      nbPlayers: Int8Array;
      gameStatus: string;
      players: Player;
    }>('http://localhost:8080/game/create', {
      gameName: gameName,
      playerName: playerName,
    });
  }

  public listGame() {
    return this.http.get<[][][]>('http://localhost:8080/game/list', {});
  }

  public joinGame(gameId: number, playerName: String) {
    return this.http.post<{
      // playerName: string;
    }>('http://localhost:8080/game/join/' + gameId.toString(), playerName);
  }
}
