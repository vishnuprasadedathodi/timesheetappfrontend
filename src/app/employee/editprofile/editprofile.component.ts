import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpSerService } from 'src/app/shared/service/emp-ser.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  id=0;
  
  empobj:any=[];

  constructor(private _empser:EmpSerService,private _router:Router,private _actroute:ActivatedRoute) { }

  ngOnInit(): void {
    this._actroute.paramMap.subscribe((param)=>{
      this.id=Number(param.get('id'));
      console.log(this.id);

    });
    this._empser.getSingleRecord(this.id).subscribe((res)=>{
      this.empobj={...res}
      console.log(this.empobj);
    })

  }
 editEmp(val:any)
 {
  const empobj={
    id:this.id,
    name:val.name,
    age:val.age,
    gender:val.gender,
    designation:val.designation,
    phn_no:val.phn_no,
    email:val.email,
    password:this.empobj.password


  }
  this._empser.updateEmployee(empobj).subscribe(()=>{
    alert("your profile updated successfully")
    this._router.navigate(['employee/profile'])
  })
 }


}
