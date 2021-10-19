import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpSerService } from 'src/app/shared/service/emp-ser.service';

@Component({
  selector: 'app-addleave',
  templateUrl: './addleave.component.html',
  styleUrls: ['./addleave.component.css']
})
export class AddleaveComponent implements OnInit {

  id=0;
  status="submitted";
  empobj:any=[];
  addleavearr:any=[];

  constructor(private _empser:EmpSerService,private _router:Router,private _actroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=Number(sessionStorage.getItem("user"))
    
    this._empser.getSingleRecord(this.id).subscribe((res)=>{
      this.empobj={...res}
      console.log(this.empobj);
    })

  }
  addleave(val:any){
    const addleavearr={
      id:this.empobj.id,
      name:this.empobj.name,
      date:val.date,
      days:val.days,
      leave_type:val.leave_type,
      status:this.status
    }
    this._empser.addleave(addleavearr).subscribe(()=>
    alert("Time sheet added succesfully"))
    this._router.navigate(['/employee/profile'])
  }

}
