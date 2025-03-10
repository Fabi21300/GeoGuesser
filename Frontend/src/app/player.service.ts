import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  //array mit spielernamen und score 1 - 5000
  players = [
    {name: 'Player1', score: 1},
    {name: 'Player2', score: 2},
    {name: 'Player3', score: 330},
    {name: 'Player4', score: 2231},
    {name: 'Player5', score: 4999},
  ];
  
  constructor() { }
  
  getPlayers() {
    return this.players;
  }
  addPlayer(name: string, score: number) {
    this.players.push({name: name, score: score});
  }
  delPlayer(name: string) {
    this.players = this.players.filter(player => player.name !== name);
  }
  updatePlayer(name: string, score: number) {
    this.players = this.players.map(player => player.name === name ? {name, score} : player);
  }
  


}
