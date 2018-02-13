import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { AuthServiceImpl } from '../auth.service';
import { UtilModule } from '../util/util.module';


const routes:Routes=[

  {path:'', component:LoginComponent},
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forChild(routes),
    UtilModule
  ],
  declarations: [LoginComponent],
  providers:[AuthServiceImpl]
  
})
export class LoginModule { }
