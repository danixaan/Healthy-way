import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NoIngresadoGuard } from './no-ingresado.guard';
import { IngresadoGuard } from './ingresado.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'bienvenida',
    pathMatch: 'full'
  },
  {
    path: 'home',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'bienvenido',
    redirectTo: 'bienvenida',
    pathMatch: 'full'
  },
  {
    path: 'login',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'signup',
    redirectTo: 'signup',
    pathMatch: 'full'
  },
  {
    path: 'ejercicios',
    redirectTo: 'ejercicios',
    pathMatch: 'full'
  },
  {
    path: 'alimentacion',
    redirectTo: 'alimentacion',
    pathMatch: 'full'
  },
  {
    path: 'caminar',
    redirectTo: 'caminar',
    pathMatch: 'full'
  },
  {
    path: 'edit-food',
    redirectTo: 'edit-food',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'e404',
    pathMatch: 'full'
  },
 
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canActivate:[NoIngresadoGuard]
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule),
    canActivate:[NoIngresadoGuard]
  },
  {
    path: 'ejercicios',
    loadChildren: () => import('./ejercicios/ejercicios.module').then( m => m.EjerciciosPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'bienvenida',
    loadChildren: () => import('./bienvenida/ejercicios1.module').then( m => m.Ejercicios1PageModule),
    canActivate:[NoIngresadoGuard]
  },
  {
    path: 'alimentacion',
    loadChildren: () => import('./alimentacion/alimentacion.module').then( m => m.AlimentacionPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'caminar',
    loadChildren: () => import('./caminar/caminar.module').then( m => m.CaminarPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'edit-food',
    loadChildren: () => import('./edit-food/edit-food.module').then( m => m.EditFoodPageModule),
    canActivate:[IngresadoGuard]
    
  },

  {
    path: 'e404',
    loadChildren: () => import('./e404/e404.module').then( m => m.E404PageModule),
    canActivate:[NoIngresadoGuard]
  },
  
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
