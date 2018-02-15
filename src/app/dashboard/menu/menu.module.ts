import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { RouterModule,Routes } from '@angular/router';
import { UtilModule } from '../../util/util.module';
import { MatSelectModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { dashboardService } from '../dashboardservice.service';


const routes: Routes=[
  {
    path:'', component:MenuComponent
  }
]
  

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    MatSelectModule,
    UtilModule
  ],
  declarations: [MenuComponent],
  providers:[dashboardService]
  
})
export class MenuModule { }
