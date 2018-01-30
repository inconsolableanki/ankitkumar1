import { Component, OnInit } from '@angular/core';
import * as Firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    
    
    ngOnInit(): void {
      
      let config = {
        

    apiKey: "AIzaSyDlicN4LLGwF3Pb6c3XuHZTyR6XI2Wlu_w",
    authDomain: "food-pandaproject1.firebaseapp.com",
            
  };

     Firebase.initializeApp(config);
}
}