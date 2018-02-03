import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import {AuthServiceImpl} from '../auth.service';
import { UserModel } from './user.module';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

user : UserModel= new UserModel();




 
  constructor (private authservices: AuthServiceImpl)
  {

  }
 
  signUpWithEmailAndPassword(email,password){
    console.log("email is", email)
    console.log("password is", password)
    this.authservices.userSignup(email,password)

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
