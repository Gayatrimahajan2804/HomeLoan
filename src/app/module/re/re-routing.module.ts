import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewEnquiryComponent } from './view-enquiry/view-enquiry.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ViewLoanComponent } from './view-loan/view-loan.component';
import { RegisterComponent } from './register/register.component';
import path from 'path';

const routes: Routes = [
  {
    path:'view_enquiry',component:ViewEnquiryComponent, 
    children:[ {path:'reg',component:RegisterComponent}
    
    ]
  },
  {
    path:'feedback',component:FeedbackComponent
  },
  {
    path:'view_loan',component:ViewLoanComponent
  },
  {
    path:'reg',component:RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReRoutingModule { }
