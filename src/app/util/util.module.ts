import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { LoaderComponent } from './loader/loader.component';
import { MatSnackBarModule } from '@angular/material';
import { CoreServices } from './core.service';

@NgModule({
  imports: [
    CommonModule,
    MatSnackBarModule
  ],
  declarations: [AlertComponent, LoaderComponent],
  exports : [AlertComponent],
  providers:[CoreServices]
})
export class UtilModule { }
