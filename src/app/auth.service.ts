import * as Firebase from 'firebase';
import { Observable } from 'rxjs/Rx';
import { User } from 'firebase';
import { from } from 'rxjs/observable/from'
import { UserDetail } from './model/user-detail.model';
import { appConstants } from './util/app.constant';

import { EventEmitter, Injectable } from '@angular/core';
import { LogService } from './logService.service';
 

 
export interface AuthService{

   // userSignup(email, password);
        userSignup(email,password) : Observable<any>;
        userSignin(email,password) : Observable<any>;
        insertUserInfo(user : Firebase.User)
        logout();
        reloadTokenAndUserDetail();
        getUserDetail(); 
        getToken();

        isAuthenticated() : boolean;
}


@Injectable()
export class AuthServiceImpl implements AuthService{
   
    
constructor(private logService : LogService){

}


       /* userSignup(email:any,password:any): Promise<any>{
            return this.signUpWithEmailAndPassword(email,password)
        }*/
// calling the usersignup and in method
            private appConstant = appConstants;
            private token : string;
            private userDetail : UserDetail ///we have to hide these detials
            public LoginEvent : EventEmitter<boolean> = new EventEmitter()



        userSignup(email:any,password:any){
                   return this.signUpWithEmailAndPassword(email,password)
        }
        userSignin(email:any,password:any){
            return this.signInWithEmailAndPassword(email,password)
        }

    //insert method call
        insertUserInfo(user:Firebase.User)
        {
            this.storeUserinfo(user);
        }

    //call signUp and signIn methods

            private signUpWithEmailAndPassword(email,password):Observable<any>{
                return from(Firebase.auth().createUserWithEmailAndPassword(email,password))
            }

            private signInWithEmailAndPassword(email,password):Observable<any>{
                return from(Firebase.auth().signInWithEmailAndPassword(email,password))
            }

                private storeUserinfo(user:Firebase.User) //insert method is observable now create subscribe
                {
                    this.logService.log(user)
                    from (user.getIdToken(true)).subscribe(
                        data =>{
                            this.logService.log(data)
                            this.token = data;  // this vill revert the token detials 
                            this.storeValueInLocalStorage(this.appConstant.TOKEN,data)
                            
                        }, error=>{
                            this.logService.log(error)
                            
                        }

                    )
                    this.createUserDetail(user)
                }



                  private createUserDetail(user: Firebase.User){   //create user details and now store in firebas
                            let userDetail : UserDetail = new UserDetail();
                            userDetail.displayName = user.displayName;
                            userDetail.emailId = user.email;
                            userDetail.emailVerified = user.emailVerified;
                            userDetail.phone = user.phoneNumber
                            userDetail.photoURL = user.photoURL
                            this.userDetail = userDetail
                            this.storeValueInLocalStorage(this.appConstant.USER_DETAIL, JSON.stringify(userDetail))
                           //JSON TO CONVERT VALUE IN STRING 
                           //CREATE DETAILS AND STORE IN LOCALSTORAGE
                  }



                  storeValueInLocalStorage(key: string, value: string){
                            localStorage.setItem(key, value);
                       }
                          googleSignInUsingPopup(){

        console.log("Hello World")
    }

    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                    getValueFromLocalStorage(key){
                        return localStorage.getItem(key)
                      }

    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                    
                          removeValueFromLocalStorage(key){
                                localStorage.removeItem(key)
                            }

    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                         getToken(){
                       this.logService.log(this.token)
                            return this.token;
                                    
                    }

    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                getUserDetail(){
                    this.logService.log(this.userDetail)
                return this.userDetail;
           }


                    reloadTokenAndUserDetail(){
                    //this.storeUserInfo(Firebase.auth().currentUser);
                    this.token = this.getValueFromLocalStorage(this.appConstant.TOKEN)
                    this.userDetail = JSON.parse(this.getValueFromLocalStorage(this.appConstant.USER_DETAIL))
               }

   //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

               logout(){
                        Firebase.auth().signOut();
                        this.removeValueFromLocalStorage(this.appConstant.TOKEN)
                        this.removeValueFromLocalStorage(this.appConstant.USER_DETAIL)
                   }
   //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                   refreshToken(){
                    
                            //Students section
                    
                        }

                            isAuthenticated(): boolean{           //token should not b null as authrization
                                  return this.token != null
                            }

    signInWithGoogle(){
        
    }


}





