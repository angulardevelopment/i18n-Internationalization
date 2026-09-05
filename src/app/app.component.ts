import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet, Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterOutlet, RouterLink]
})
export class AppComponent {
  constructor(private router: Router){}
  routes: Routes = [];

  ngAfterViewInit(): void {
    this.routes = this.router.config;
  }

}
