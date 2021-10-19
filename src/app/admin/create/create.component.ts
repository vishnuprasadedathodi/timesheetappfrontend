import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpSerService } from 'src/app/shared/service/emp-ser.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  addemp:any=[];
  constructor(private _empser:EmpSerService,private _router:Router) { }

  ngOnInit(): void {
  }

  addEmp(val:any){
    const addemp={
      name:val.name,
      age:val.age,
      gender:val.gender,
      designation:val.designation,
      phn_no:val.phn_no,
      email:val.email,
      password:val.password


    }
    this._empser.addEmployee(addemp).subscribe(()=>{
      alert("New employee details added succesfully")
      this._router.navigate(['/admin/dashboard'])

    })
  }

}
