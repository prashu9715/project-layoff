import { Component, OnInit } from '@angular/core';
import { HomeService } from './service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nameList:String[];

  constructor(private homeService:HomeService) { }

  ngOnInit(): void {
    // this.name=localStorage.getItem('userName');

    this.homeService.getNameList().subscribe((res:String[])=>{
      this.nameList = res;
    })

  }

}
