import { NgModule }      from '@angular/core';

import { AppComponent }  from './app.component';
import { AccueilComponent }   from './accueil.component';
import { RouterModule, Routes } from '@angular/router';

   

const appRoutes: Routes = [
   // { path: 'accueil', component: AccueilComponent },
   // { path: '',  component: AccueilComponent },
];

@NgModule({
  imports:      [ ,  
  // RouterModule.forRoot(appRoutes)],
   //exports: [
    //   RouterModule
   ]
})
export class AppRoutingModule { }
