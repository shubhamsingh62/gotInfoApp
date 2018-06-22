import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';
import { HttpServiceService } from '../http-service.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  public currentUrl;
  public bookId;
  public charId
 

  constructor(private _router:ActivatedRoute, private router:Router,private http:HttpServiceService,private _location:Location ) { 
   
  }

  ngOnInit() {
  let bookId=this._router.snapshot.paramMap.get('bookId')
   this.currentUrl=this.http.getDetails(bookId).subscribe(
       data=>{
         this.currentUrl=data
        },
       error=>{
         console.log("some error occured");
         console.log(error.errorMessege);
       }

    );
   

  }
  goBack() {
    // window.history.back();
    this._location.back();
  }

}
