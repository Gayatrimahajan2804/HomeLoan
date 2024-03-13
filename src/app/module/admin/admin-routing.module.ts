import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatasticsComponent } from './statastics/statastics.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  {path:'statastics',component:StatasticsComponent},
  {path:'add_employee',component:AddEmployeeComponent},
  {path:'update_employee',component:UpdateEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
