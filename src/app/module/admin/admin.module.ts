import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { StatasticsComponent } from './statastics/statastics.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

console.log("Admin module load..!")
@NgModule({
  declarations: [
    AddEmployeeComponent,
    StatasticsComponent,
    UpdateEmployeeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
