import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReRoutingModule } from './re-routing.module';
import { FeedbackComponent } from './feedback/feedback.component';
import { ViewEnquiryComponent } from './view-enquiry/view-enquiry.component';
import { ViewLoanComponent } from './view-loan/view-loan.component';

console.log("RelationalExecutive module load..!")
@NgModule({
  declarations: [
    FeedbackComponent,
    ViewEnquiryComponent,
    ViewLoanComponent
  ],
  imports: [
    CommonModule,
    ReRoutingModule
  ]
})
export class ReModule { }
