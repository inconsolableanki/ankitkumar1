import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';

import { RouterModule, Routes } from '@angular/router';
import { CoreServices } from '../util/core.service';
import { dashboardService } from './dashboardservice.service';

const routes: Routes = [
  {
    path:'', component:DashboardComponent,
    children:[
      {path:"", redirectTo: 'menu', pathMatch:'full'},
      {path:'menu', loadChildren:'app/dashboard/menu/menu.module#MenuModule'},
      {path:'scheduling', loadChildren:'app/dashboard/scheduling/scheduling.module#SchedulingModule'}      
    ]
  }    
    ]

    

@NgModule({
  imports: [
    CommonModule,
    
    RouterModule.forChild(routes)
  ],
  declarations: [DashboardComponent],
  providers:[dashboardService]

 
})
export class DashboardModule { }
