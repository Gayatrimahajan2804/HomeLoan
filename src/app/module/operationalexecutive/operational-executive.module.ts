import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationalExecutiveRoutingModule } from './operational-executive-routing.module';
import { ViewRegisterComponent } from './view-register/view-register.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ViewRegisterComponent
  ],
  imports: [
    CommonModule,
    OperationalExecutiveRoutingModule,
    
  ]
})
export class OperationalExecutiveModule { }
