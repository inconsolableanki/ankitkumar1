import { Injectable } from '@angular/core';

@Injectable()

export class HearderService {

  logourl:string = "assets/1.jpg";

  menu : any[]=[{
    displayname : 'Home',
    url:'home'
    //icon: 'settings_power'
  },
  {
    displayname:'Login',
    url:'login'
  },
  {
    displayname:'Contactus',
    url:'contactus'
  },
  {
    displayname:'Dashboard',
    url:'dashboard'
  },
  {
    displayname:'Registration',
    url: 'registration'
  }
 
   
  
  ]
  getmenu(){
    return this.menu;
  }

  geturl()
  {
    return this.logourl;  
  }

  constructor() { 
    
  }

}
