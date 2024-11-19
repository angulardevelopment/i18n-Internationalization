import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-localized',
  templateUrl: './localized.component.html',
  styleUrls: ['./localized.component.scss']
})
export class LocalizedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this, 'loc a   l')
  }

}
