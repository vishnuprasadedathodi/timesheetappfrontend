import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
import { EmployeeRoutingModule } from './employee-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { OldpasswordComponent } from './oldpassword/oldpassword.component';
import { AddtimesheetComponent } from './addtimesheet/addtimesheet.component';
import { ViewtimesheetComponent } from './viewtimesheet/viewtimesheet.component';
import { SavedtimesheetComponent } from './savedtimesheet/savedtimesheet.component';
import { EdittimesheetComponent } from './edittimesheet/edittimesheet.component';
import { AddleaveComponent } from './addleave/addleave.component';
import { LeavehistoryComponent } from './leavehistory/leavehistory.component';
import { EmployeeheaderComponent } from './employeeheader/employeeheader.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  declarations: [
    ProfileComponent,

    EditprofileComponent,
     ChangepasswordComponent,
     OldpasswordComponent,
     AddtimesheetComponent,
     ViewtimesheetComponent,
     SavedtimesheetComponent,
     EdittimesheetComponent,
     AddleaveComponent,
     LeavehistoryComponent,
     EmployeeheaderComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,FormsModule,NgxPaginationModule,Ng2SearchPipeModule
  ]
})
export class EmployeeModule { }
