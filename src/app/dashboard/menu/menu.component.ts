import { Component, OnInit } from '@angular/core';
import { MenuItemModel } from '../../model/menuitem.model';
import { dashboardService } from '../dashboardservice.service';
import { error } from 'util';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  
  menu : MenuItemModel = new MenuItemModel();
  
  constructor(private dashboardServices: dashboardService) {

     console.log("Menu is created successfully")
   }
  ngOnInit() {


    this.getAllMenu();
  }

  createMenu(menu){
    this.dashboardServices.createMenu(menu).subscribe(
      (data)=>{
        console.log("Menu is create successfully",data)
      },
      (error)=>{
        console.log("error while creating menu ",error)

        if(error.status == 401 || error.status==403){
          console.log("navigate to login page")

        }else if(error.status==404){
          console.log("navigate user to the resource  page not found")
        }
      }
    )
  }

  updateMenu(menu){ 
    this.dashboardServices.updateMenu(menu).subscribe(
      (data)=>{
        console.log("Menu is update successfully",data)
      },(error)=>{
        console.log("Error while updating Menu", error)
      }
    )
  }

  deleteMenu(id:string){
    this.dashboardServices.deleteMenu(id).subscribe(
      (data)=>{
          console.log(" Menu is deleted successfully",data)
      },(error)=>{
        console.log("Error while deleting item from Menu",error)
      }
    )
  }

  getAllMenu(){
    this.dashboardServices.getAllMenu().subscribe(
      (data)=>{
        console.log("Menu Items are feteched successfull")
      },(error)=>
      {
        console.log("Error while fetching menu item ")
        if(error.status == 401 || error.status == 403){
          console.log("navigate user to the login page")
        }else if(error.status == 404){
          console.log("navigate user to the resource not found page")          
        }
      }
      
    )
  }

  getMenuById(id){
    this.dashboardServices.getMenuById(id).subscribe(
      (data)=>{
        console.log("Menu Items are feteched by ID successfull",data)
      },(error)=>{
        console.log("Error while fetching menu item", error)
      }
    )
  }
}
