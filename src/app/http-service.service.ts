import { Injectable } from '@angular/core';

import{HttpClient, HttpErrorResponse } from '@angular/common/http';

import {Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class HttpServiceService {
  public currentUrl;
  public bookId;
  public charId;
  public allHouse;

  constructor(public _http:HttpClient) { 

  }
  public baseUrl = "https://anapioficeandfire.com/api";
  

  public getAllBooks():any{
    let myResponse=this._http.get(this.baseUrl+"/books");
    return myResponse;
  }
  public getAllcharc():any{
    let myResponse=this._http.get(this.baseUrl+"/characters");
    return myResponse;
  }

  public getDetails(id):any{
    let myResponse=this._http.get(this.baseUrl+"/books"+"/"+id);
    return myResponse;
  }
  public getcharcter(id):any{
    let myResponse=this._http.get(this.baseUrl+"/characters"+"/"+id);
    return myResponse;
  }

  public getAllhouse():any{
    let myResponse=this._http.get(this.baseUrl+"/houses");
    return myResponse;
  }

  public gethouse(id):any{
    let myResponse=this._http.get(this.baseUrl+"/houses"+"/"+id);
    return myResponse;
  }
}
