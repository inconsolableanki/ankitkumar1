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
  
  constructor(private dashboardServices: dashboardService) { }
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
