import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpSerService } from 'src/app/shared/service/emp-ser.service';

@Component({
  selector: 'app-leavedetail',
  templateUrl: './leavedetail.component.html',
  styleUrls: ['./leavedetail.component.css']
})
export class LeavedetailComponent implements OnInit {
  p:number=1;
  term:string="";
  leavearr:any=[];

  constructor(private _empser:EmpSerService,private _router:Router) { }

  ngOnInit(): void {
    this.fetchData();
  
  }

  fetchData(){

    this._empser.getAllLeave().subscribe((res)=>{
      this.leavearr=res;
      console.log(this.leavearr);
      console.log(res);
    })

  }

}
