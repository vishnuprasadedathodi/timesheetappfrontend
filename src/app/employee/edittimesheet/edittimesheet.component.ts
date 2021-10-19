import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmpSerService } from 'src/app/shared/service/emp-ser.service';

@Component({
  selector: 'app-edittimesheet',
  templateUrl: './edittimesheet.component.html',
  styleUrls: ['./edittimesheet.component.css']
})
export class EdittimesheetComponent implements OnInit {
  tid=0;

  timeobj:any=[];

  constructor(private _empser:EmpSerService,private _router:Router,private _actroute:ActivatedRoute) { }

  ngOnInit(): void {
    this._actroute.paramMap.subscribe((param)=>{
      this.tid=Number(param.get('tid'));
      console.log(this.tid);

    });
    this._empser.getsingletimesheet(this.tid).subscribe((res)=>{
      this.timeobj={...res}
      console.log(this.timeobj);
    })

  }
 edittime(val:any)
 {

  const timeobj={
    
    tid:this.tid,
    id:this.timeobj.id,
      name:this.timeobj.name,
      date:val.date,
      start_time:val.start_time,
      end_time:val.end_time,
      status:val.status


  }
  this._empser.updatetime(timeobj).subscribe(()=>{
    alert("timesheet updated successfully")
    this._router.navigate(['employee/savedtimesheet'])
  })
 }

}
