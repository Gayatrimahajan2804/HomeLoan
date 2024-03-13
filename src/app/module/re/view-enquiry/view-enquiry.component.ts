import { Component, OnInit } from '@angular/core';
import { EnquiryServiceService } from '../../../services/enquiry-service.service';
import { CiBilServiceService } from '../../../services/ci-bil-service.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-enquiry',
  templateUrl: './view-enquiry.component.html',
  styleUrl: './view-enquiry.component.css'
})
export class ViewEnquiryComponent implements OnInit {
  enquiryData: any;
  cibilScore: number;
   flag:boolean=true;

  constructor(private enquiryService: EnquiryServiceService, private cibilservice:CiBilServiceService, private router:Router) {}

  ngOnInit(): void {
    this.fetchEnquiryData();
    this.getCibilScore();
    

   

  }

  fetchEnquiryData(): void {
    this.enquiryService.fetchEnquiryData().subscribe(
      (response) => {
        console.log('Enquiry Data:', response);
        this.enquiryData = response;
       },
      (error) => {
        console.error('Error fetching enquiry data:', error);
      }
    );
  }

  getCibilScore(): void {
    this.cibilservice.getCibilScore().subscribe(
      (score) => {
        
        console.log('CIBIL Score:', score);
        this.cibilScore = score;
      },
      (error) => {
        console.error('Error fetching CIBIL score:', error);
      }
    );
  }

  checkLoanEligibility(): string {
    
    if (this.cibilScore >= 750) {

      this.router.navigateByUrl('/apnafinance/register');
      return 'You are eligible for a loan!';


    } else if (this.cibilScore >= 650) {
      return 'Your loan eligibility may vary. Some lenders may consider your application.';
    } else {
      return 'Your CIBIL score is low. Work on improving it for better loan terms.';
    }
  }
 
}

