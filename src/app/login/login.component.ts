import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  email_address=""
  valid_password=""
  valid= [
    {
      username:"doe@gmail.com", 
      pswd:"123456"},
    {
      username:"kevi@fb.com", 
      pswd:"123456"},
    {
      username:"yoyo@gmail.com", 
      pswd:"123456"
    }
  ]
  
  loginClick() {
    console.log("EMAIL: "+this.email_address+" valid_password: "+this.valid_password);
    for (var i = 0; i < this.valid.length; i++) {
      if( this.email_address == this.valid[i].username && this.valid_password == this.valid[i].pswd ){
        this.router.navigate(["/account"]);
      }

    }
  }
  ngOnInit() {
  }
}


