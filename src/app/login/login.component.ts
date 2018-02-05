import { Component, OnInit } from '@angular/core';
import { AuthService,AuthServiceImpl } from '../auth.service';
import * as Firebase from 'firebase';
import { Observable,Observer } from 'rxjs/Rx';
import { setInterval, setTimeout } from 'timers';
import { UserModel } from '../registration/user.module';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: UserModel = new UserModel();
  constructor(private authservices:AuthServiceImpl){

  } 
  loginWithUsernameAndPassword(email, password){
        this.authservices.userSignin(email, password).subscribe(
          data=>{
            console.log(data)
            this.storeInfoSubscriber(data);
            console.log("loginWithUsernameAndPassword ends")
          },
          error=>{
            console.log(error.msg)
          }
        )
      }

  storeInfoObversable(user:Firebase.User): Observable<any>{
    return Observable.create((observer : Observer<any>)=>{

      setTimeout(()=>{
        observer.next(user)
      },5000)
    })
  }

  storeInfoSubscriber(user : Firebase.User){
    console.log("inside the subscription")
    this.storeInfoObversable(user).subscribe(
      data=>{
        console.log("store info of the user data")
        this.authservices.insertUserInfo(data)
        console.log("user details ends  ")
      },
      error=>{
        console.log("while subcribing userinfo")
      }
    )
  }
  
  ngOnInit() {
  }

}
