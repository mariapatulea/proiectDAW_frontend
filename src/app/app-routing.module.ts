import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home-page/home/home.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('src/app/modules/home-page/home-page.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    loadChildren: () => import('src/app/modules/login-page/login-page.module').then(m => m.LoginPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
