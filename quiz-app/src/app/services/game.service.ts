import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  url = 'http://localhost:3000/quiz';

  constructor(private http: HttpClient) { }

  getCollection() {
    return this.http.get(this.url + '/quiz');
  }
  getQuiz(quizId) {
    return this.http.get(`${this.url}/${quizId}`);
  }
}
