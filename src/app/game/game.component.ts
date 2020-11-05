import { GameService } from './game.service';
import {
  Component,
  ElementRef,
  ViewChild,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  ChangeDetectorRef
} from '@angular/core';
import { HostListener } from '@angular/core';
import { KeyPress, Result, Word } from './game.models';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnChanges {
  @ViewChild('overlay', { static: false }) overlay: ElementRef;
  @Input() lang = 'lv';
  keys: KeyPress[] = [];
  start = false;
  speed = 2000;
  words: Word[];
  word: Word;
  index = 0;
  timer: any;
  result: Result = { correct: 0, wrong: 0 };
  gameOver = false;
  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    const keyIndex = this.getKeyPressIndex();
    if (this.keys.length === 0) {
      this.keys.push({ i: this.index, key: event.key });
    } else if (keyIndex >= 0) {
      this.keys[keyIndex].key = event.key;
    } else {
      this.keys.push({ i: this.index, key: event.key });
    }
  }

  constructor(private gameService: GameService, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.words = this.gameService.getWordsLv();
    this.word = this.words[0];
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { lang } = changes;
    if (lang && lang.currentValue && !this.start) {
      this.words = lang.currentValue === 'lv' ? this.gameService.getWordsLv() : this.gameService.getWordsEn();
      this.word = this.words[0];
      this.cd.detectChanges();
    }
  }

  gameInit() {
    this.overlay.nativeElement.className = 'hidden';
    this.start = true;
    this.timer = setInterval(() => {
      if (this.getKeyPressIndex() < 0) {
        this.keys.push({ i: this.index, key: 'fail' });
      }
      if (this.index === this.words.length - 1) {
        this.endGame();
        this.stopTimer();
      }
      this.index++;
      this.word = this.words[this.index];
    }, this.speed);
  }

  endGame() {
    this.start = false;
    let wrongAnswers = 0;
    this.keys.forEach((value, i) => {
      if (value.key !== this.words[i].key) {
        wrongAnswers++;
      }
    });
    this.result.correct = this.keys.length - wrongAnswers;
    this.result.wrong = wrongAnswers;
    this.gameOver = true;
  }

  restart() {
    this.word = this.words[0];
    this.overlay.nativeElement.className = 'overlay';
    this.gameOver = false;
    this.index = 0;
    this.keys = [];
  }

  stopTimer() {
    clearInterval(this.timer);
  }

  getKeyPressIndex() {
    return this.keys.findIndex(it => it.i === this.index);
  }
}
