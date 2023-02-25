import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BookFlightComponent } from './book-flight/book-flight.component';

import { AboutUsComponent } from './about-us/about-us.component';
import { UserComponent } from './user/user.component';
import { FlightReviewComponent } from './flight-review/flight-review.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AddFlightComponent } from './add-flight/add-flight.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { ViewFlightComponent } from './view-flight/view-flight.component';


const allLinks:Routes=[
  {path:'registerFlight',component:AddFlightComponent},
  {path:'view',component:ViewFlightComponent},
  {path:'add-flight',component:AddFlightComponent},
  {path:'book-flight',component:BookFlightComponent},
  
  
  
  {path:'my-bookings',component:MyBookingsComponent},
  {path:'about-us',component:AboutUsComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BookFlightComponent,
   
    AboutUsComponent,
    UserComponent,
    FlightReviewComponent,
    
   
    AddFlightComponent,
    MyBookingsComponent,
    ViewFlightComponent,
    
  ],
  imports: [
    BrowserModule,
    
    RouterModule.forRoot(allLinks),
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }