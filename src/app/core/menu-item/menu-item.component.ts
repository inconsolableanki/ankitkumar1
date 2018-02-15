import { Component, OnInit, Input } from '@angular/core';
import { AuthServiceImpl } from '../../auth.service';
import { LogService } from '../../logService.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() displayname : any[];
  isAuth: boolean = false;
 //boolean type variable  
 
 
    constructor(private authservice : AuthServiceImpl,private logService:LogService) {// dependencies introduced
  
      this.authservice.LoginEvent.subscribe(        //publish an event of Login event and subsribe it
        (data: boolean)=>{
          this.isAuth = data;
        },
        error=> {
          console.log("Error")
        }
  
    )
    }

  ngOnInit() {

    this.isAuthenticated()
  }


  isAuthenticated(){
    this.logService.log("Is Authenticated Called !")
      this.logService.log("isAuthenticated"+ this.authservice.isAuthenticated) ;
        this.isAuth = this.authservice.isAuthenticated();
        
  }
}
