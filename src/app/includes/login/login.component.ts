import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private router:Router){}

  loginform:FormGroup;

  ngOnInit(): void {
    this.loginform = this.fb.group(
      {
        username:[],
        password:[]
      }
    )
  }

  onSubmit()
  {
    let un:string=this.loginform.controls['username'].value;
    let ps:string=this.loginform.controls['password'].value;
  
    if(un==='admin' && ps==='admin123')
    {
      alert('user is an admin');
      sessionStorage.setItem('userType','admin')
      this.router.navigateByUrl('userdash/admin')
      
    }
    else if(un==='re' && ps==='re123')
    {
      alert('user is an relational Executive');
      sessionStorage.setItem('userType','re')
      this.router.navigateByUrl('userdash/re')

    }
    else if(un==='oe' && ps==='oe123')
    {
      alert('user is an oprational Executive');
      sessionStorage.setItem('userType','operationalexecutive')
      this.router.navigateByUrl('userdash/operationalexecutive')

    }


else
{
  alert('Enter valid Authentication Details');
}  
  }

}
