import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpSerService } from 'src/app/shared/service/emp-ser.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  id=0;

  password:any;
  conpas:any;
  
  emparr:any=[];

  constructor(private _empser:EmpSerService,private _router:Router,private _actroute:ActivatedRoute) { }

  ngOnInit(): void {
    // this._actroute.paramMap.subscribe((param)=>{
    //   this.id=Number(param.get('id'));
    //   console.log(this.id);

    // });
    this.id=Number(sessionStorage.getItem("user"))
    this._empser.getSingleRecord(this.id).subscribe((res)=>{
      this.emparr={...res}
      console.log(this.emparr);
    })

  }
 changePass(val:any)
 {

  this.password=val.password;
  this.conpas=val.conpas;

if(this.password==this.conpas){

  const emparr={
    id:this.id,
    name:this.emparr.name,
    age:this.emparr.age,
    gender:this.emparr.gender,
    designation:this.emparr.designation,
    phn_no:this.emparr.phn_no,
    email:this.emparr.email,
    password:val.password

  

  }
  this._empser.updateEmployee(emparr).subscribe(()=>{
    alert("password updated successfully")
    this._router.navigate(['employee/profile'])
  })
 }
 else{
   window.alert("Pasword not matched")
   this.conpas="";
 }

}

}




  
