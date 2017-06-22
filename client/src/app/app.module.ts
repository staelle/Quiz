import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { AccueilComponent }   from './accueil.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports:      [ BrowserModule,  
  AppRoutingModule],
  declarations: [ AppComponent, /*AccueilComponent*/ ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
