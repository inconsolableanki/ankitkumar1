import { Component, OnInit, Input } from '@angular/core';
import { AuthServiceImpl } from '../../auth.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() displayname : any[];
  isAuth: boolean = false;
 //boolean type variable   
    constructor(private authservice : AuthServiceImpl) {
  
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
    console.log("Is Authenticated Called !")
        this.isAuth = this.authservice.isAuthenticated();
        console.log(this.displayname)
  }
}
