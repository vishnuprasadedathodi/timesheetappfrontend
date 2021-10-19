import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from '../admin/edit/edit.component';
import { AddleaveComponent } from './addleave/addleave.component';
import { AddtimesheetComponent } from './addtimesheet/addtimesheet.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { EdittimesheetComponent } from './edittimesheet/edittimesheet.component';
import { EmployeeheaderComponent } from './employeeheader/employeeheader.component';
import { LeavehistoryComponent } from './leavehistory/leavehistory.component';
import { OldpasswordComponent } from './oldpassword/oldpassword.component';
import { ProfileComponent } from './profile/profile.component';
import { SavedtimesheetComponent } from './savedtimesheet/savedtimesheet.component';
import { ViewtimesheetComponent } from './viewtimesheet/viewtimesheet.component';

const routes: Routes = [
{path:"profile/:id",component:ProfileComponent},
{path:"profile",component:ProfileComponent},
{path:"editprofile/:id",component:EditprofileComponent},
{path:"changepassword",component:ChangepasswordComponent},
{path:"oldpassword",component:OldpasswordComponent},
{path:"addtimesheet",component:AddtimesheetComponent},
{path:"viewtimesheet",component:ViewtimesheetComponent},
{path:"savedtimesheet",component:SavedtimesheetComponent},
{path:"edittime/:tid",component:EdittimesheetComponent},
{path:"addleave",component:AddleaveComponent},
{path:"leavehistory",component:LeavehistoryComponent},
{path:"employeeheader",component:EmployeeheaderComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
