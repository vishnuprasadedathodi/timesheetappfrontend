import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpSerService } from '../shared/service/emp-ser.service';

@Component({
  selector: 'app-employeelogin',
  templateUrl: './employeelogin.component.html',
  styleUrls: ['./employeelogin.component.css']
})
export class EmployeeloginComponent implements OnInit {

  id:any;
  password:string="";
  empdata:any=[];

  constructor(private _empser:EmpSerService,private _route:Router) { }

  ngOnInit(): void {
    this._empser.signout();
  }
  checkEmpdata(){
    this._empser.getAllEmployee().subscribe((res:any)=>{this.empdata=res
    const data=this.empdata.filter((item:any)=>(item.id==this.id)&&(item.password==this.password));
    if(data.length>0){
      this._empser.signin(this.id)
      this._route.navigate(['/employee','profile',this.id])
    }
    else{
      alert("inavalid credential")
      this.id;
      this.password="";
    }
    })
  }

}
