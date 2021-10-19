import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { addleaveUrl, addtimeUrl, addUrl, adminUrl, customdateUrl, edittimeUrl, editUrl, empUrl, leavedetailUrl, leavesubmittedUrl, leaveUrl, timesubmittedUrl, timeUrl, updateleaveUrl, updatetimeUrl, viewsaveUrl, viewtimeUrl } from '../constants/constant';
import { IAdmin } from '../interface/admin.modal';
import { IEmployee } from '../interface/employee.modal';
import { ILeave } from '../interface/leave.modal';
import { ITimesheet } from '../interface/timesheet.modal';

@Injectable({
  providedIn: 'root'
})
export class EmpSerService {

  constructor(private _http:HttpClient) {
   }

   getlogincredential(){
    return this._http.get<IAdmin>(adminUrl)
  }
  signin(user:any){
    sessionStorage.setItem("user",user);
  
  }
  signout(){
    sessionStorage.removeItem("user");
  }
  getAllEmployee()
  {
    return this._http.get<IEmployee>(empUrl);
  }
  addEmployee(emp:any)
  {
    return this._http.post(addUrl,emp)
  }
  updateEmployee(editemp:any){
    const url:string=`${editUrl}`;
    return this._http.put(url,editemp);

  }
  getSingleRecord(id:number)
  {
    const url:string=`${empUrl}/${id}`;
    return this._http.get<IEmployee>(url);

  }

  deleteEmployee(id:number)
  {
    const url:string=`${empUrl}/${id}`;
    console.log(url);
    return this._http.delete(url);

  }

  timesheet(){

    return this._http.get<ITimesheet>(timeUrl)

  }
  timesheetAdd(time:any){
    return this._http.post(addtimeUrl,time)
  }

  viewtimesheet(id:number){
    const url:string=`${viewtimeUrl}/${id}`;
    return this._http.get<ITimesheet>(url)
  }

  viewsavedtimesheet(id:number){

    const url:string=`${viewsaveUrl}/${id}`;
    return this._http.get<ITimesheet>(url)

  }

  getsingletimesheet(id:number)
  {
    const url:string=`${edittimeUrl}/${id}`;
      return this._http.get<ITimesheet>(url);
  }

  updatetime(edittime:any){

    const url:string=`${updatetimeUrl}`;
    return this._http.put(url,edittime);

  }

  getAllLeave()
  {
    return this._http.get<ILeave>(leaveUrl);
  }
  
  addleave(data:any)
  {
    return this._http.post(addleaveUrl,data)
  }
  
  
  viewleavehistory(id:number){
    const url:string=`${leavedetailUrl}/${id}`;
    return this._http.get<ILeave>(url)
  }

  getsubmittedtime()
  {
    return this._http.get<ITimesheet>(timesubmittedUrl);
  }

  getsubmitLeave()
  {
    return this._http.get<ILeave>(leavesubmittedUrl);
  }

  updateleave(editleave:any){

    const url:string=`${updateleaveUrl}`;
    return this._http.put(url,editleave);

  }
  getsingleLeave(id:number){
    const url:string=`${leaveUrl}/${id}`;
    return this._http.get<ILeave>(url);
  }

  getcustomdate(date1:any,date2:any){
    const url:string=`${customdateUrl}/${date1}/${date2}`;
    return this._http.get<ILeave>(url);
  }

  date1(date1:any){
    sessionStorage.setItem("date1", date1)
  }
  date2(date2:any){
    sessionStorage.setItem("date2",date2)
  }

  year(year:any){
    sessionStorage.setItem("year" ,year)

}


}