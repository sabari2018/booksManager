import { Component } from '@angular/core';
import * as firebase  from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyBiwXQRdPxStToqMho5-YNfHzs5g8dcWQQ",
      authDomain: "booksmanager-45266.firebaseapp.com",
      databaseURL: "https://booksmanager-45266.firebaseio.com",
      projectId: "booksmanager-45266",
      storageBucket: "booksmanager-45266.appspot.com",
      messagingSenderId: "549620072659",
      appId: "1:549620072659:web:3c8d7b6187abef8c4d5426",
      measurementId: "G-D3XZPHTGJN"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

  }
  title = 'booksmanager';
}
