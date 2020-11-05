import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  lang: string;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('lv');
  }

  onLangChange(lang: string): void {
    this.lang = lang;
  }
}
