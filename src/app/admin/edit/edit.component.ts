import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpSerService } from 'src/app/shared/service/emp-ser.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
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
    password:this.empobj.password,
    name:val.name,
    age:val.age,
    gender:val.gender,
    designation:val.designation,
    phn_no:val.phn_no,
    email:val.email
    


  }
  this._empser.updateEmployee(empobj).subscribe(()=>{
    alert("Employee detail updated successfully")
    this._router.navigate(['admin/dashboard'])
  })
 }

}
