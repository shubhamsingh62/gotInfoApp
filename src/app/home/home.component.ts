import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import{HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpServiceService } from '../http-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public currentUrl;
  public defaultValue: string = "without name";
  public allData:any[] =[];
  public bookId;
  public sortValue:boolean= false;
  constructor(private http:HttpServiceService) {     
}

  ngOnInit() {
    
   this.http.getAllBooks().subscribe(
      data=>{
        let temp=data;
        this.allData=this.allData.concat(temp)
        

      },
      error=>{
        console.log("some error occured");
        console.log(error.errorMessege);
      }

    );

    this.http.getAllcharc().subscribe(
      data=>{
        let temp=data;
        this.allData=this.allData.concat(temp)
       

      },
      error=>{
        console.log("some error occured");
        console.log(error.errorMessege);
      }

    );

    this.http.getAllhouse().subscribe(
      data=>{
        let temp=data;
        this.allData=this.allData.concat(temp)
       

      },
      error=>{
        console.log("some error occured");
        console.log(error.errorMessege);
      }

    );
  }
  public change(){
    this.sortValue= ! this.sortValue;
  }
}
