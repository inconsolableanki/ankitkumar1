import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { error } from 'util';
import { Subscription } from 'rxjs/Rx';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myfirstSubscription : Subscription;
  ngOnDestroy(): void{
    console.log("Destroy called")
    this.myfirstSubscription.unsubscribe();
  }
  constructor() { }

  ngOnInit() {

/*    let myFirstObserver : Observable<number> = Observable.interval(1000); 

    this.myfirstSubscription = myFirstObserver.subscribe(

      (data : number) =>{
        console.log("Your normal data is ", data);
      },
      (error)=>{
        console.log("Error is ", error)
      },
      ()=>{
        console.log("Observable is done")
      }
    )
    myFirstObserver.subscribe(

      (data : number) =>{
        console.log("Your normal data is ", data);
      },
      (error)=>{
        console.log("Error is ", error)
      },
      ()=>{
        console.log("Observable is done")
      }
    )*/


  }

}
