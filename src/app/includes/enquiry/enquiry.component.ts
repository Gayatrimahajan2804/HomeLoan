import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, PatternValidator, Validators } from '@angular/forms';


@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrl: './enquiry.component.css'
})
export class EnquiryComponent implements OnInit
{
  

  loanInquiryForm: FormGroup;
  cibilService: any;

  ngOnInit() {
    this.loanInquiryForm = new FormGroup({
      'fullName': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'phoneNumber': new FormControl(null, [Validators.required, Validators.pattern('[0-9]{10}')]),
      'dateOfBirth': new FormControl(null, Validators.required),
      'panCard': new FormControl(null, [Validators.required, Validators.pattern('[A-Z]{5}[0-9]{4}[A-Z]{1}')]),
      'loanAmount': new FormControl(null, Validators.required)
    });
  }

  submitInquiry() {
    if (this.loanInquiryForm.valid) {
      console.log('Form submitted', this.loanInquiryForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
  checkCibilScore(): void {
    
    const cibilScore = this.cibilService.getCibilScore(); 

   
    if (cibilScore >= 750) {
      console.log('Good credit score! You are eligible for loans.');
    } else if (cibilScore >= 650) {
      console.log('Average credit score. Some lenders may consider your application.');
    } else {
      console.log('Low credit score. Work on improving it.');
    }
  }
}
