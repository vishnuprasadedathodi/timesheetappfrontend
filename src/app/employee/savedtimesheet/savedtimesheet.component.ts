import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpSerService } from 'src/app/shared/service/emp-ser.service';

@Component({
  selector: 'app-savedtimesheet',
  templateUrl: './savedtimesheet.component.html',
  styleUrls: ['./savedtimesheet.component.css']
})
export class SavedtimesheetComponent implements OnInit {
  id=0;
  viewarr:any=[];
  p:number=1;
  term:string="";
  constructor(private _empser:EmpSerService,private _route:Router) { }

  ngOnInit(): void {
    this.viewtimesheet()
  }
  viewtimesheet()
  {
    this.id=Number(sessionStorage.getItem("user"))
    this._empser.viewsavedtimesheet(this.id).subscribe((res)=>{
      this.viewarr=res;
      console.log(this.viewarr)
    })
  }
}
