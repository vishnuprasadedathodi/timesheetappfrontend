import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmpSerService } from 'src/app/shared/service/emp-ser.service';

@Component({
  selector: 'app-editleave',
  templateUrl: './editleave.component.html',
  styleUrls: ['./editleave.component.css']
})
export class EditleaveComponent implements OnInit {

  lid=0;
  
  leaveobj:any=[];

  constructor(private _empser:EmpSerService,private _router:Router,private _actroute:ActivatedRoute) { }

  ngOnInit(): void {
    this._actroute.paramMap.subscribe((param)=>{
      this.lid=Number(param.get('lid'));
      console.log(this.lid);

    });
    this._empser.getsingleLeave(this.lid).subscribe((res)=>{
      this.leaveobj={...res}
      console.log(this.leaveobj);
    })

  }
 editleave(val:any)
 {
  const leaveobj={
    lid:this.lid,
    id:this.leaveobj.id,
      name:this.leaveobj.name,
      date:this.leaveobj.date,
      days:this.leaveobj.days,
      leave_type:this.leaveobj.leave_type,
      status:val.status


  }
  this._empser.updateleave(leaveobj).subscribe(()=>{
    window.alert("successfully updated")
    this._router.navigate(['admin/leavedetails'])
  })
 }

}
