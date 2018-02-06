import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import {AuthService, AuthServiceImpl} from '../auth.service';

import * as Firebase from 'firebase';
import { User } from 'firebase';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import { UserModel } from '../model/user.model';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

user : UserModel= new UserModel;




 
  constructor (private authservices: AuthServiceImpl, private router : Router)
  {
   /* this.modelChanged
       .debounceTime(1000)     // wait 300ms after the last event before emitting last event
        .distinctUntilChanged() // only emit if value is different from previous value
        .subscribe(data => {
          console.log("This.address ", this.address1)
          console.log("address ", data.key)
            console.log("old ",this.data1)
            this.data1[data.key] = data.value;
            console.log("new ",this.data1)   
          });
  } 

  changed(value: string, key) {
    console.log("Hello Changed")
    this.modelChanged.next({key: key, value: value});*/
  }

  private validateCredential(email,password)
  {
      this.validate(email,password).then((response)=>{
          console.log(response)
            this.signUpWithEmailAndPassword(email,password)

              }).catch((error)=>{console.log(error)
                    console.log("we got google firebase auth responed")
    }).catch(function(error){
                            console.log(error.message)
    })
                                 console.log("Firebase is finished")
    
  }
  

  private validate(email,password):Promise<any>{
    console.log("Inside validate()  ")
      return new Promise<any>((resolve,reject)=>{
          console.log("inside call back")
              if(email=="ankit1@gmail.com"){
               // console.error("email-id is already exist")
                  reject("Email is already avalaible in DB")
          } else{
                      console.log("user can perform login operation")
                        resolve("user can perform login operation")

          }
    })
  }
   
  //----------------------------------------------------------------

 
  address1: string;
  address2: string;
  modelChanged: Subject<{key, value}> = new Subject<{key, value}>();

  data1 :{ address1, address2 } = { address1 : '', address2: ''};
  
//----------------------------------------------------------------------









  // call singnUpwith method auth services |||
 
    signUpWithEmailAndPassword(email,password){
       console.log("email is", email)
          console.log("password is", password)
            // this.authservices.userSignup(email,password)
            this.authservices.userSignup(email,password).subscribe((respone:Firebase.User)=>{
              console.log(respone)

              let currentUser: Firebase.User = Firebase.auth().currentUser;

              console.log("current useremail is ", currentUser.email)
              console.log("current user is ", currentUser.displayName)
              alert("Your are regestred succesfully")
              this.router.navigate(['login'])
              currentUser.getIdToken(true).then((token : string)=>{
                console.log("token is ",token)
              },(error:any)=>{
                console.log(error)
              })
              console.log("we got google fire base response")   
            }, error =>{
              console.log(error.message)
              alert(error.message);
              
            })
  }


 /* submitForm(){
        if(this.myForm.invalid){            /*check for use lara-mean-stack
          alert("Form is invalid")
        }*/

        signInWithGoogle(){
       
        }
     

  ngOnInit() {
  }

}
