import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  constructor(private fb:FormBuilder,private router:Router){}

  registerForm:FormGroup;

  ngOnInit(): void {
    
    this.registerForm=this.fb.group(
      {
        customerFName:['',Validators.required,[Validators.minLength(25)]],
        customerMName: ['',Validators.required,Validators.min(25)],
        customerLName: ['',Validators.required],
        customerEmail: ['',Validators.required],
        password: ['',Validators.required],
        confirmPassword: ['',Validators.required],
        username: ['',Validators.required],
        mobileNo: ['',Validators.required],
        panCardNo: ['',Validators.required],
        adharNo: ['',Validators.required],
        age: ['',Validators.required],
        gender: ['',Validators.required],
        customerAddress: ['',Validators.required]
        

      }
    )
  }

  onRegister() {
    console.log('First Name:- ' + this.registerForm.controls['customerFName'].value)
    console.log('Middle Name:- ' + this.registerForm.controls['customerMName'].value)
    console.log('Last Name:- ' + this.registerForm.controls['customerLName'].value)
    console.log('Email:-' + this.registerForm.controls['customerEmail'].value)
    console.log('Password:-' + this.registerForm.controls['password'].value)
    console.log('Confirm Password:-' + this.registerForm.controls['confirmPassword'].value)
    console.log('Username:- ' + this.registerForm.controls['username'].value)
    console.log('MobileNo:- ' + this.registerForm.controls['mobileNo'].value)
    console.log('PanCard:- ' + this.registerForm.controls['panCardNo'].value)
    console.log('AdharCard:-' + this.registerForm.controls['adharNo'].value)
    console.log('Gender:-' + this.registerForm.controls['gender'].value)
    console.log('Address:-' + this.registerForm.controls['customerAddress'].value)

    alert('register Successfully');
    window.location.reload()
}
}