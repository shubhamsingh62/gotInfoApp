import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpServiceService } from './http-service.service';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CharacterComponent } from './character/character.component';
import { HousesComponent } from './houses/houses.component';
import { OrderByPipe } from './order-by.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    CharacterComponent,
    HousesComponent,
    OrderByPipe
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot([
      {path:"home", component:HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:"books/:bookId",component:DetailComponent},
      {path:"characters/:charId",component:CharacterComponent},
      {path:"houses/:houseId",component:HousesComponent}
    ])
  ],
  providers: [HttpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
