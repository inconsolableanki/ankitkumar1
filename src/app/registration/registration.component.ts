import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import {AuthService, AuthServiceImpl} from '../auth.service';
import { UserModel } from './user.module';
import * as Firebase from 'firebase';
import { User } from 'firebase';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

user : UserModel= new UserModel();




 
  constructor (private authservices: AuthServiceImpl, private router : Router)
  {

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
    
      
  // call singnUpwith method auth services |||
 
    signUpWithEmailAndPassword(email,password){
       console.log("email is", email)
          console.log("password is", password)
            // this.authservices.userSignup(email,password)
            this.authservices.userSignup(email,password).subscribe((respone:Firebase.User)=>{
              console.log(respone)

              let currentUser: Firebase.User = Firebase.auth().currentUser;

              console.log("urrent user is ", currentUser.email)
              console.log("urrent user is ", currentUser.displayName)
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
