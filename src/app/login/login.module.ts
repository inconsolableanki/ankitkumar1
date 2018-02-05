import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';


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
    RouterModule.forChild(routes)
  ],
  declarations: [LoginComponent],
  
})
export class LoginModule { }
