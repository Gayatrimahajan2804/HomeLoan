import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usermenus } from '../../model/usermenus';
import { link } from 'fs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{

  constructor(private router:Router, private activateRoute:ActivatedRoute){}

  userOption:Array<any>;
  type:string;

  ngOnInit(): void {
    
    this.userOption=Usermenus.menus;
    this.type=sessionStorage.getItem('userType');
}
navigateTo(link:string)
{
  // this.router.navigateByUrl('/re/userdash/'+this.type+"/"+link)
  this.router.navigateByUrl('userdash/'+this.type+"/"+link)
}
}
