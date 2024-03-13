import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './templete/header/header.component';
import { DashboardComponent } from './templete/dashboard/dashboard.component';
import { AboutComponent } from './templete/about/about.component';
import { LocationComponent } from './templete/location/location.component';
import { EnquiryComponent } from './includes/enquiry/enquiry.component';
import { LoginComponent } from './includes/login/login.component';
import { UserDashBoardComponent } from './includes/user-dash-board/user-dash-board.component';
import { UserHeaderComponent } from './includes/user-header/user-header.component';
import { MenuComponent } from './includes/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    AboutComponent,
    LocationComponent,
    EnquiryComponent,
    LoginComponent,
    UserDashBoardComponent,
    UserHeaderComponent,
    MenuComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
