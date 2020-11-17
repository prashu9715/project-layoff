import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isError:boolean=false;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  login(event){
    // console.log(event);
    if(event.controls.password.errors || event.controls.userName.errors){
      this.isError=true;
    }
    else{
    localStorage.setItem('userName',event.value.userName);
    localStorage.setItem('password',event.value.password);
    this.isError=false;
    this.router.navigate(['../../content/home']);
    }
  }

}
