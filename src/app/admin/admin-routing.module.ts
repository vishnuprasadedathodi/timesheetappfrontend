import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { ApproveleaveComponent } from './approveleave/approveleave.component';

import { CreateComponent } from './create/create.component';
import { CustomdateComponent } from './customdate/customdate.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DateComponent } from './date/date.component';
import { EditComponent } from './edit/edit.component';
import { EditleaveComponent } from './editleave/editleave.component';
import { LeavedetailComponent } from './leavedetail/leavedetail.component';
import { MonthlyComponent } from './monthly/monthly.component';
import { TimesheetComponent } from './timesheet/timesheet.component';

import { YearlydateComponent } from './yearlydate/yearlydate.component';

const routes: Routes = [
{path:"dashboard" ,component:DashboardComponent},
{path:"create" , component:CreateComponent},
{path:"edit/:id",component:EditComponent},
{path:"timesheet",component:TimesheetComponent},
{path:"leavedetails",component:LeavedetailComponent},
{path:"editleave",component:EditleaveComponent},
{path:"approveleave",component:ApproveleaveComponent},
{path:"editleave/:lid",component:EditleaveComponent},
{path:"adminheader",component:AdminheaderComponent},
{path:"customdate",component:CustomdateComponent},
{path:"date",component:DateComponent},
{path:"yearlydate",component:YearlydateComponent},
{path:"monthly",component:MonthlyComponent},



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
