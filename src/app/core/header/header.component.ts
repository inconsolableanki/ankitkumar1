import { Component, OnInit } from '@angular/core';
import { HearderService } from './hearder.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menu : any[];

  logourl:string; 
  
     
  constructor(private hearderService:HearderService) {
    
this.menu = this.hearderService.getmenu();
this.logourl = this.hearderService.geturl(); 
  
  }

  ngOnInit() {

    
    
  }

}
