import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  [x: string]: any;

  constructor( private httpclient: HttpClient) { }

  public getInfo() {
    return this.http.get("https://localhost:5001/api/Info");
  }

  public postInfo() {
    return this.http.post("https://localhost:5001/api/Info", {id:1, name:'rinkal'});
  }  

  public deleteinfo() {
    return this.http.delete("https://localhost:5001/api/Info")
  }
}
