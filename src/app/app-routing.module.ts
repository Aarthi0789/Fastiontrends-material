import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeModule } from './home/home.module';
const routes: Routes = [
  // {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,HomeModule]
})
export class AppRoutingModule { }
