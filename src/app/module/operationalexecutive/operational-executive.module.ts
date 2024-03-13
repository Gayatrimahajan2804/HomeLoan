import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationalExecutiveRoutingModule } from './operational-executive-routing.module';
import { ViewRegisterComponent } from './view-register/view-register.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ViewRegisterComponent
  ],
  imports: [
    CommonModule,
    OperationalExecutiveRoutingModule,
    ReactiveFormsModule
    
  ]
})
export class OperationalExecutiveModule { }
