import { Component, OnInit } from '@angular/core';
import { AuthService,AuthServiceImpl } from '../auth.service';
import * as Firebase from 'firebase';
import { Observable,Observer } from 'rxjs/Rx';
import { UserModel } from '../model/user.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: UserModel = new UserModel();
  constructor(private authservices:AuthServiceImpl,private router:Router){

  } 
  loginWithUsernameAndPassword(email, password){
        this.authservices.userSignin(email, password).subscribe(
          data=>{
            console.log(data)
            this.storeInfoSubscriber(data);
            console.log("loginWithUsernameAndPassword ends")
          },
          error=>{
            console.log(error.messsage)
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
        this.router.navigate(['home'])
        
      },
      error=>{
        console.log("while subcribing userinfo")
      }
    )
  }
  
  ngOnInit() {

    this.authservices.getToken()
    this.authservices.getUserDetail()
  }

}
