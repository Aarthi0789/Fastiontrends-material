import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@NgModule({
  declarations: [FooterComponent, NavComponent,LoginComponent],
  imports: [
    CommonModule,
    RouterModule 
  ]
})
export class SharedModule { }
