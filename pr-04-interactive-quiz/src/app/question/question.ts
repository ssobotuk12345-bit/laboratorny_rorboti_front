import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question.html',
  styleUrl: './question.css'
})
export class Question {

  @Input() questionData!: {
    text: string;
    options: string[];
    correctIndex: number;
  };

  @Output() answerSelected = new EventEmitter<number>();

  selectedIndex: number | null = null;
  showCorrect = false;

  selectAnswer(index: number) {
    this.selectedIndex = index;
    this.answerSelected.emit(index);
  }

  // ПУБЛІЧНИЙ метод для підсвічування правильної відповіді
  showAnswer() {
    this.showCorrect = true;
  }
}
