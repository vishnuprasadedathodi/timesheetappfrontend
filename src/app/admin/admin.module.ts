import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
import { AdminRoutingModule } from './admin-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { OrderModule } from 'ngx-order-pipe';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { LeavedetailComponent } from './leavedetail/leavedetail.component';
import { ApproveleaveComponent } from './approveleave/approveleave.component';
import { EditleaveComponent } from './editleave/editleave.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { CustomdateComponent } from './customdate/customdate.component';
import { DateComponent } from './date/date.component';
import { YearlydateComponent } from './yearlydate/yearlydate.component';
import { MonthlyComponent } from './monthly/monthly.component';



@NgModule({
  declarations: [
    DashboardComponent,
    CreateComponent,
    EditComponent,
    TimesheetComponent,
    LeavedetailComponent,
    ApproveleaveComponent,
    EditleaveComponent,
    AdminheaderComponent,
    CustomdateComponent,
    DateComponent,
    YearlydateComponent,
    MonthlyComponent,
   
  
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    OrderModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ]
})
export class AdminModule { }
