import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

enum Language {
  LV = 'lv',
  EN = 'en'
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() lang = new EventEmitter<string>();
  Language = Language;
  mode = Language.LV;

  constructor(private translate: TranslateService) { }

  changeLanguage(lang: string) {
    this.mode = lang === 'lv' ? Language.LV : Language.EN;
    this.translate.use(this.mode);
    this.lang.emit(this.mode);
  }
}
