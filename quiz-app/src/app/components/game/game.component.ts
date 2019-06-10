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

  private quiz: GameModel[] = [];
  private quizId = [];
  private quizNbr = 4;

  constructor(private formBuilder: FormBuilder,
              private gameService: GameService) {}

  ngOnInit() {
    this.shuffle();
    for (let i = 0; i < this.quizNbr; i++) {
      this.getQuiz(i);
    }
  }

  getQuiz(i) {
    this.gameService.getQuiz(this.quizId[i]).subscribe((res: GameModel) => {
      this.quiz.push(res);
    });
  }

  shuffle() {
    let arr = []
    while (arr.length < this.quizNbr) {
      let r = Math.floor(Math.random() * this.quizNbr) + 1;
      if (arr.indexOf(r) === -1) {
        arr.push(r);
      }
    }
    this.quizId = arr;
  }
}
