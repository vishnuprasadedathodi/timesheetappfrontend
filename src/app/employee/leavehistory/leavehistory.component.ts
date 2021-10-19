import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpSerService } from 'src/app/shared/service/emp-ser.service';

@Component({
  selector: 'app-leavehistory',
  templateUrl: './leavehistory.component.html',
  styleUrls: ['./leavehistory.component.css']
})
export class LeavehistoryComponent implements OnInit {

  id=0;
  viewarr:any=[];
  p:number=1;
  term:string="";
  constructor(private _empser:EmpSerService,private _route:Router) { }

  ngOnInit(): void {
    this.leavehistory()
  }
  leavehistory()
  {
    this.id=Number(sessionStorage.getItem("user"))
    this._empser.viewleavehistory(this.id).subscribe((res)=>{
      this.viewarr=res;
      console.log(this.viewarr)
    })
  }

}


