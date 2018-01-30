import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  singInwithEmailPassword(email, password){

  }

  singInwithGoogle(){

  }

  Submitform(form:NgForm)
  {
    console.log(form);
  }
  constructor() { }

  ngOnInit() {
  }

}
