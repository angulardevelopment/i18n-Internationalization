import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-multilingual',
  templateUrl: './multilingual.component.html',
  styleUrl: './multilingual.component.scss'
})
export class MultilingualComponent {
  constructor(
    public translate: TranslateService
  ) {
    translate.addLangs(['en', 'nl']);
    translate.setDefaultLang('en');
  }


switchLang(lang: string) {
  this.translate.use(lang);
}

}
