import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GameService} from "../../services/game.service";
import {GameModel} from "../../models/game.model";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.sass']
})
export class GameComponent implements OnInit {

  private quiz1: GameModel;
  private quiz2: GameModel;
  private quiz3: GameModel;
  private quiz4: GameModel;
  private quizId = [];

  constructor(private formBuilder: FormBuilder,
              private gameService: GameService) {}

  ngOnInit() {

    this.getQuiz1();
    this.getQuiz2();
  }

  getQuiz1() {
    this.quizId[0] = Math.floor((Math.random() * 4) + 1);
    this.gameService.getQuiz(this.quizId[0]).subscribe((res: GameModel) => {
      this.quiz1 = res;
    });
  }
  getQuiz2() {
    this.quizId[1] = Math.floor((Math.random() * 4) + 1);
    this.gameService.getQuiz(this.quizId[1]).subscribe((res: GameModel) => {
      this.quiz2 = res;
    });
  }
}
