import { Injectable } from '@angular/core';

@Injectable()

export class HearderService {

  logourl:string = "assets/1.jpg";

  menu : any[]=[{
    displayname : 'Home',
    url:'home',
    
    //icon: 'settings_power'
  },
  {
    displayname:'Login',
    url:'login',
    isAuthRequired: false
  },
  {
    displayname:'Contactus',
    url:'contactus',
    
  },
  {
    displayname:'Dashboard',
    url:'dashboard',
    
  },

  
  {
    displayname:'Registration',
    url: 'registration',
    isAuthRequired: false
  },

  {
    displayname: 'Logout',
        url : 'login?isAuthRequired=true',
        
}
 ,
  
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
