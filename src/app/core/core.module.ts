import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { ImagePlaceholderComponent } from './image-placeholder/image-placeholder.component';
import { HearderService } from './header/hearder.service';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatToolbarModule,FlexLayoutModule
  ],
  declarations: [HeaderComponent, FooterComponent, MenuItemComponent, ImagePlaceholderComponent],
  exports: [HeaderComponent,FooterComponent],
  providers:[HearderService]
})
export class CoreModule { }
