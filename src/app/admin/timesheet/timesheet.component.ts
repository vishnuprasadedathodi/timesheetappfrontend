import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpSerService } from 'src/app/shared/service/emp-ser.service';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {
  timearr:any=[]
  term:string="";
  p:number=1;

  constructor(private _empser:EmpSerService,private _router:Router) { }

  ngOnInit(): void {
    this.fetchTimesheet()
  }
  fetchTimesheet(){
    this._empser.getsubmittedtime().subscribe((res)=>{
      this.timearr=res;
    })
  }

}
