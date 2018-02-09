import { Injectable } from '@angular/core';


@Injectable()

export class HearderService {

  logourl:string = "assets/1.jpg";

  menu : any[]=[{
    displayname : 'Home',
    url:'home',
    icon:'home'
    
  },
  {
    displayname:'Login',
    url:'login',
    isAuthRequired: false,
    icon: 'settings_phone'
  },
  {
    displayname:'Contactus',
    url:'contactus',
    icon: 'supervisor_account'
  },
  {
    displayname:'Dashboard',
    url:'dashboard',
    icon: 'dashboard'
  },

  
  {
    displayname:'Registration',
    url: 'registration',
    isAuthRequired: false
  },

  {
    displayname: 'Logout',
        url : 'login?isAuthRequired=true',
        icon: 'settings_power'
        
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
