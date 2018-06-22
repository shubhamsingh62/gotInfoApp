import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { HttpServiceService } from '../http-service.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  public charcId;

  public currentUrl;
  constructor(private _router: ActivatedRoute, private router: Router, private _http: HttpServiceService,private _location:Location) {

  }

  ngOnInit() {
    let charcId = this._router.snapshot.paramMap.get('charId')
    this.currentUrl = this._http.getcharcter(charcId).subscribe(
      data => {
        this.currentUrl = data
       },
      error => {
        console.log("some error occured");
        console.log(error.errorMessege);
      }

    )
  }
  goBack() {
    // window.history.back();
    this._location.back();
  }  

}
