import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient:HttpClient) { }

  getNameList(){
    return this.httpClient.get("/api/v1/mycontroller/getNameList",{
      params:{
        id:'23'
      }
    })
  }

}
