import { Component, OnInit } from '@angular/core';
import { RegisterServiceService } from '../../../services/register-service.service';
import { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-view-register',
  templateUrl: './view-register.component.html',
  styleUrl: './view-register.component.css'
})
export class ViewRegisterComponent implements OnInit{

  registerData:any;
  constructor(private registerservice:RegisterServiceService){}

  ngOnInit(): void {
    this.fetchRegisterData();
  }
  fetchRegisterData() : void{
    
    this.registerservice.fetchRegisterData().subscribe(
      (response)=>{
        console.log('Register Data:',response);
        this.registerData=response;
      },
      (error)=>
      {
        console.error('Error fetching register data:',error);
      }
    );
  }
}
    
  

 
