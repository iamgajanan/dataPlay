import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class APIService {
private _url="https://jsonplaceholder.typicode.com/todos/"

 
    
    constructor(private http: HttpClient) { 

    }
    getData(){
      return this.http.get(this._url)
    }
  

}
