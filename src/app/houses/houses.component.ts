import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';
import { HttpServiceService } from '../http-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {
      public currentUrl;
      public houseId;
  constructor(private http:HttpServiceService,private _router:ActivatedRoute,private router:Router,private _location:Location) { 
    
  }

  ngOnInit() {
    
    let houseId=this._router.snapshot.paramMap.get('houseId')
     this.currentUrl=this.http.gethouse(houseId).subscribe(
         data=>{
           this.currentUrl=data;
           
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
