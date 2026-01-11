import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Question } from '../question/question';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, Question],
  templateUrl: './quiz.html',
  styleUrl: './quiz.css'
})
export class Quiz {

  // доступ до дочірнього компонента
  @ViewChild(Question) questionComponent!: Question;

  question = {
    text: 'Яка столиця України?',
    options: ['Львів', 'Харків', 'Київ', 'Одеса'],
    correctIndex: 2
  };

  selectedAnswer: number | null = null;

  onAnswerSelected(index: number) {
    this.selectedAnswer = index;
  }

  // метод, який викликає showAnswer() у дочірньому компоненті
  showCorrectAnswer() {
    this.questionComponent.showAnswer();
  }
}
