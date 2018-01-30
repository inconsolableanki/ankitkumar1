import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchedulingComponent } from './scheduling.component';
import { RouterModule,Routes } from '@angular/router';


const routes: Routes=[{
  path:'', component: SchedulingComponent
  
}]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SchedulingComponent],
  
})
export class SchedulingModule { }
