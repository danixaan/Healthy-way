import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Ejercicios', url: '/ejercicios', icon: 'barbell' },
    { title: 'Alimentacion', url: '/alimentacion', icon: 'nutrition' },
    { title: 'Caminar', url: '/caminar', icon: 'walk' },
  ];
  public labels = [];
  constructor() {}
}








