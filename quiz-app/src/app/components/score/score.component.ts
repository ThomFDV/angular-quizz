import { Component, OnInit } from '@angular/core';
import {GameService} from "../../services/game.service";

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.sass']
})
export class ScoreComponent implements OnInit {

  score: number;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.getScore();
  }

  getScore() {
    this.score = this.gameService.getScore();
  }
}
