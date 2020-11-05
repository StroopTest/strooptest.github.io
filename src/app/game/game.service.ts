import { Injectable } from '@angular/core';
import { Word } from './game.models';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  wordsLv = [
    { name: 'SARKANS', color: 'green', key: 'z' },
    { name: 'ZAĻŠ', color: 'green', key: 'z' },
    { name: 'DZELTENS', color: 'red', key: 's' },
    { name: 'SARKANS', color: 'yellow', key: 'd' },
    { name: 'DZELTENS', color: 'yellow', key: 'd' },
    { name: 'ZILS', color: 'blue', key: 'z' },
    { name: 'SARKANS', color: 'blue', key: 'z' },
    { name: 'DZELTENS', color: 'green', key: 'z' },
    { name: 'ZILS', color: 'red', key: 's' },
    { name: 'ZILS', color: 'yellow', key: 'd' },
    { name: 'DZELTENS', color: 'blue', key: 'z' },
    { name: 'SARKANS', color: 'red', key: 's' },
    { name: 'ZAĻŠ', color: 'red', key: 's' },
    { name: 'ZAĻŠ', color: 'yellow', key: 'd' },
    { name: 'SARKANS', color: 'green', key: 'z' },
    { name: 'ZAĻŠ', color: 'green', key: 'z' },
    { name: 'DZELTENS', color: 'red', key: 's' },
    { name: 'SARKANS', color: 'yellow', key: 'd' },
    { name: 'DZELTENS', color: 'yellow', key: 'd' },
    { name: 'ZILS', color: 'blue', key: 'z' },
    { name: 'SARKANS', color: 'blue', key: 'z' },
    { name: 'DZELTENS', color: 'green', key: 'z' },
    { name: 'ZILS', color: 'red', key: 's' },
    { name: 'ZILS', color: 'yellow', key: 'd' },
    { name: 'DZELTENS', color: 'blue', key: 'z' },
    { name: 'SARKANS', color: 'red', key: 's' },
    { name: 'ZAĻŠ', color: 'red', key: 's' },
    { name: 'ZAĻŠ', color: 'yellow', key: 'd' },
    { name: 'SARKANS', color: 'green', key: 'z' },
    { name: 'ZAĻŠ', color: 'green', key: 'z' },
    { name: 'DZELTENS', color: 'red', key: 's' },
    { name: 'SARKANS', color: 'yellow', key: 'd' },
    { name: 'DZELTENS', color: 'yellow', key: 'd' },
    { name: 'ZILS', color: 'blue', key: 'z' },
    { name: 'SARKANS', color: 'blue', key: 'z' },
    { name: 'DZELTENS', color: 'green', key: 'z' },
    { name: 'ZILS', color: 'red', key: 's' },
    { name: 'ZILS', color: 'yellow', key: 'd' },
    { name: 'DZELTENS', color: 'blue', key: 'z' },
    { name: 'SARKANS', color: 'red', key: 's' }
  ];
  wordsEn = [
    { name: 'RED', color: 'green', key: 'g' },
    { name: 'GREEN', color: 'green', key: 'g' },
    { name: 'YELLOW', color: 'red', key: 'r' },
    { name: 'RED', color: 'yellow', key: 'y' },
    { name: 'YELLOW', color: 'yellow', key: 'y' },
    { name: 'BLUE', color: 'blue', key: 'b' },
    { name: 'RED', color: 'blue', key: 'b' },
    { name: 'YELLOW', color: 'green', key: 'g' },
    { name: 'BLUE', color: 'red', key: 'r' },
    { name: 'BLUE', color: 'yellow', key: 'y' },
    { name: 'YELLOW', color: 'blue', key: 'b' },
    { name: 'RED', color: 'red', key: 'r' },
    { name: 'GREEN', color: 'red', key: 'r' },
    { name: 'GREEN', color: 'yellow', key: 'y' },
    { name: 'RED', color: 'green', key: 'g' },
    { name: 'GREEN', color: 'green', key: 'g' },
    { name: 'YELLOW', color: 'red', key: 'r' },
    { name: 'RED', color: 'yellow', key: 'y' },
    { name: 'YELLOW', color: 'yellow', key: 'y' },
    { name: 'BLUE', color: 'blue', key: 'b' },
    { name: 'RED', color: 'blue', key: 'b' },
    { name: 'YELLOW', color: 'green', key: 'g' },
    { name: 'BLUE', color: 'red', key: 'r' },
    { name: 'BLUE', color: 'yellow', key: 'y' },
    { name: 'YELLOW', color: 'blue', key: 'b' },
    { name: 'RED', color: 'red', key: 'r' },
    { name: 'GREEN', color: 'red', key: 'r' },
    { name: 'GREEN', color: 'yellow', key: 'y' },
    { name: 'RED', color: 'green', key: 'g' },
    { name: 'GREEN', color: 'green', key: 'g' },
    { name: 'YELLOW', color: 'red', key: 'r' },
    { name: 'RED', color: 'yellow', key: 'y' },
    { name: 'YELLOW', color: 'yellow', key: 'y' },
    { name: 'BLUE', color: 'blue', key: 'b' },
    { name: 'RED', color: 'blue', key: 'b' },
    { name: 'YELLOW', color: 'green', key: 'g' },
    { name: 'BLUE', color: 'red', key: 'r' },
    { name: 'BLUE', color: 'yellow', key: 'y' },
    { name: 'YELLOW', color: 'blue', key: 'b' },
    { name: 'RED', color: 'red', key: 'r' }
  ];

  getWordsLv() {
    return this.shuffle(this.wordsLv);
  }

  getWordsEn() {
    return this.shuffle(this.wordsEn);
  }

  shuffle(words: Word[]) {
    for (let i = words.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [words[i], words[j]] = [words[j], words[i]];
    }
    return words;
  }
}
