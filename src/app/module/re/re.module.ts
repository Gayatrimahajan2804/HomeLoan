import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReRoutingModule } from './re-routing.module';
import { FeedbackComponent } from './feedback/feedback.component';
import { ViewEnquiryComponent } from './view-enquiry/view-enquiry.component';
import { ViewLoanComponent } from './view-loan/view-loan.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FeedbackComponent,
    ViewEnquiryComponent,
    ViewLoanComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ReRoutingModule,
    ReactiveFormsModule

  ]
})
export class ReModule { }
