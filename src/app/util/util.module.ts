import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { LoaderComponent } from './loader/loader.component';
import { MatSnackBarModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatSnackBarModule
  ],
  declarations: [AlertComponent, LoaderComponent],
  exports : [AlertComponent]
})
export class UtilModule { }
