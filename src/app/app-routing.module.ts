import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'node:path';
import { DashboardComponent } from './templete/dashboard/dashboard.component';
import { AboutComponent } from './templete/about/about.component';
import { LocationComponent } from './templete/location/location.component';
import { EnquiryComponent } from './includes/enquiry/enquiry.component';
import { LoginComponent } from './includes/login/login.component';
import { UserDashBoardComponent } from './includes/user-dash-board/user-dash-board.component';
import { RegisterComponent } from './module/re/register/register.component';

const routes: Routes = [
  {
    path:'', redirectTo:'apnafinance',pathMatch:'full'
  },

  {
    path:'apnafinance',component:DashboardComponent, 
    children:
    [

      {
        path:'about' , component:AboutComponent
      },
      {
        path:'location',component:LocationComponent
      },
      {
        path:'enquiry', component:EnquiryComponent
      },
      {
        path:'login', component:LoginComponent
      },
      
    ]
  },
  {
    path:'userdash' ,component:UserDashBoardComponent,children:[
      {path:'admin', loadChildren:()=>import('./module/admin/admin.module').then(file=>file.AdminModule)},
      {path:'re', loadChildren:()=>import('./module/re/re.module').then(file=>file.ReModule)},
      {path:'operationalexecutive', loadChildren:()=>import('./module/operationalexecutive/operational-executive.module').then(file=>file.OperationalExecutiveModule)}


    ]

    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
