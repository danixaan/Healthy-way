import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private router:Router) {}

  cerrarSesion(){
    localStorage.removeItem('ingresado');
    this.router.navigate(["/login"]);
  }

}








