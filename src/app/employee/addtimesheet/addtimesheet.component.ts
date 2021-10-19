import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmpSerService } from 'src/app/shared/service/emp-ser.service';

@Component({
  selector: 'app-addtimesheet',
  templateUrl: './addtimesheet.component.html',
  styleUrls: ['./addtimesheet.component.css']
})
export class AddtimesheetComponent implements OnInit {

  id=0;
  
  empobj:any=[];
  addtimearr:any=[];

  constructor(private _empser:EmpSerService,private _router:Router,private _actroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=Number(sessionStorage.getItem("user"))
    // this._actroute.paramMap.subscribe((param)=>{
    //   this.id=Number(param.get('id'));
    //   console.log(this.id);

    // });
    this._empser.getSingleRecord(this.id).subscribe((res)=>{
      this.empobj={...res}
      console.log(this.empobj);
    })

  }
  addtime(val:any){
    const addtimearr={
      id:this.empobj.id,
      name:this.empobj.name,
      date:val.date,
      start_time:val.start_time+":00",
      end_time:val.end_time+":00",
      status:val.status
    }
    this._empser.timesheetAdd(addtimearr).subscribe(()=>
    alert("Time sheet added succesfully"))
    this._router.navigate(['/employee/profile'])
  }

}
