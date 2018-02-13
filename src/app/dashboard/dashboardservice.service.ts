import { CoreServices } from "../util/core.service";
import { MenuItemModel } from "../model/menuitem.model";
import { Observable } from "rxjs/Observable";
import { environment } from "../../environments/environment.prod";
import { DASHBOARD_CONSTANTS } from "./dashboard.constant";

export class dashboardService{
    API_URL : string;

    constructor(private coreServices: CoreServices){// DEPENDENCY INJECTION 

        this.API_URL = environment.API_URL;   //ENVIRONMENT 
    }

    createMenu(data: MenuItemModel): Observable<MenuItemModel>{// we can also pass <any> instead of menuitem
                return this.coreServices.post(this.API_URL + DASHBOARD_CONSTANTS.CREATE_MENU, data, {});
            }
        
            updateMenu(data: MenuItemModel){
                return this.coreServices.put(this.API_URL + DASHBOARD_CONSTANTS.UPDATE_MENU, data, {});
            } //API_URL IS ENVIRONMENT TO RUN ON URL....USING DASHBOARDCONSTANT//CALLING CORESERVICES IN.IT
        
            getAllMenu(): Observable<MenuItemModel>{   
                return this.coreServices.get(this.API_URL + DASHBOARD_CONSTANTS.FETCH_ALL_MENU, {});
           }
        
            getMenuById(id: string): Observable<MenuItemModel>{// THIS WILL GET BY ID
                return this.coreServices.get(this.API_URL + DASHBOARD_CONSTANTS.FETCH_MENU_BY_ID + id, {})
            }
        
            deleteMenu(): Observable<any>{
                return this.coreServices.delete(this.API_URL + DASHBOARD_CONSTANTS.DELETE_MENU, {})
            } //{} OBVERSBLE IS RETURN 3 PARM (DATA,BODY,OPTONS).SO{} BRACES SHOWING THE OPTIONS PARAMETTER
}