import { Component, OnInit } from '@angular/core';
import { EnquiryServiceService } from '../../../services/enquiry-service.service';
import { CiBilServiceService } from '../../../services/ci-bil-service.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailServiceService } from '../../../services/email-service.service';

@Component({
  selector: 'app-view-enquiry',
  templateUrl: './view-enquiry.component.html',
  styleUrl: './view-enquiry.component.css'
})
export class ViewEnquiryComponent implements OnInit {
  enquiryData: any;
  cibilScore: number;
   flag:boolean=true;
   emailData:any;


  constructor(private enquiryService: EnquiryServiceService,private emailservice:EmailServiceService, private cibilservice:CiBilServiceService, private router:Router) {}

  ngOnInit(): void {
    // this.fetchEnquiryData();
    // this.getCibilScore();
    // this.checkLoanEligibility();
    

   

  }

  fetchEnquiryData(): void {
    // this.enquiryService.fetchEnquiryData().subscribe(
    //   (response) => {
    //     console.log('Enquiry Data:', response);
    //     this.enquiryData = response;
    //    },
    //   (error) => {
    //     console.error('Error fetching enquiry data:', error);
    //   }
    // );
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
    
    if (this.cibilScore >= 750)
     {
      this.emailservice.sendEmail(this.emailData).subscribe(
        (response) => {console.log('Email sent successfully:', response);},
        (error) => {console.error('Error sending email:', error);}
      );
          return 'You are eligible for a loan!';
     } 
    
    else  (this.cibilScore >= 650)
     
    {
       this.emailservice.sendEmail(this.emailData).subscribe(
        (response) => {console.log('Email sent successfully:', response); },
        (error) => {console.error('Error sending email:', error);}
      );
      return 'Your CIBIL score is low. Work on improving it for better loan terms.';

    } 
   
  }

navigateToRegistration()
{

    this.router.navigate(['/reg']);
}

}

 


