import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';

import * as firebase from 'firebase';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ContactusModule } from './contactus/contactus.module';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { AuthService } from './auth.service';
import {MatSidenavModule} from '@angular/material/sidenav';



const routes : Routes = [

  
  {path:"", redirectTo: 'home', pathMatch:'full'}, 
  {path:'home', loadChildren:'app/home/home.module#HomeModule'},
  {path:'login',loadChildren:'app/login/login.module#LoginModule'},
  {path:'dashboard',loadChildren:'app/dashboard/dashboard.module#DashboardModule'},
 {path:'contactus', loadChildren:'app/contactus/contactus.module#ContactusModule'},
{path:'registration', loadChildren:'app/registration/registration.module#RegistrationModule'},
  {path:"**",component:PagenotfoundComponent}

  
]

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
      
    
  ],
  imports: [
    BrowserModule,
    CoreModule, MatSidenavModule,
    RouterModule.forRoot(routes),NoopAnimationsModule
    
    
    
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
