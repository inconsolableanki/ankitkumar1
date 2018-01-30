import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactusComponent } from './contactus.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes=[
{path:'', component:ContactusComponent}
]
@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  declarations: [ContactusComponent],

})
export class ContactusModule { }
