import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-multilingual',
  templateUrl: './multilingual.component.html',
  styleUrl: './multilingual.component.scss',
  imports: [CommonModule, TranslatePipe]
})
export class MultilingualComponent {
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'nl']);
    translate.setFallbackLang('en');
    translate.use('en');
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }
}
