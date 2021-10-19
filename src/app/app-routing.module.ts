import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './shared/authentication/auth.guard';

const routes: Routes = [
  {path:"",component:HomeComponent},
  // {path:"",component:AdminloginComponent},
  {path:"adminlogin",component:AdminloginComponent},
  // {path:"",component:EmployeeloginComponent},
  {path:"employeelogin",component:EmployeeloginComponent},
  {path:"footer",component:FooterComponent},
  

  {path:"admin",loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule),canActivate:[AuthGuard]},
  {path:"employee",loadChildren:()=>import('./employee/employee.module').then(m=>m.EmployeeModule),canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
