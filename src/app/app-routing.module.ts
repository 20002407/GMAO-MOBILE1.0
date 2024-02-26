import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'task',
    loadChildren: () => import('./task/task.module').then( m => m.TaskPageModule)
  },
  {
    path: 'splach',
    loadChildren: () => import('./splach/splach.module').then( m => m.SplachPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'ordre',
    loadChildren: () => import('./ordre/ordre.module').then( m => m.OrdrePageModule)
  },
  {
    path: 'di',
    loadChildren: () => import('./di/di.module').then( m => m.DIPageModule)
  },
  {
    path: 'ot',
    loadChildren: () => import('./ot/ot.module').then( m => m.OTPageModule)
  },
  {
    path: 'carteequipment',
    loadChildren: () => import('./carteequipment/carteequipment.module').then( m => m.CarteequipmentPageModule)
  },
  {
    path: 'cartebatiment',
    loadChildren: () => import('./cartebatiment/cartebatiment.module').then( m => m.CartebatimentPageModule)
  },
  {
    path: 'carteinfra',
    loadChildren: () => import('./carteinfra/carteinfra.module').then( m => m.CarteinfraPageModule)
  },
  {
    path: 'carteactif',
    loadChildren: () => import('./carteactif/carteactif.module').then( m => m.CarteactifPageModule)
  },
  {
    path: 'detailsdi',
    loadChildren: () => import('./detailsdi/detailsdi.module').then( m => m.DetailsdiPageModule)
  },
  {
    path: 'detailsot',
    loadChildren: () => import('./detailsot/detailsot.module').then( m => m.DetailsotPageModule)
  },
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
