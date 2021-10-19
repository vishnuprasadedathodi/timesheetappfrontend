import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpSerService } from 'src/app/shared/service/emp-ser.service';

@Component({
  selector: 'app-oldpassword',
  templateUrl: './oldpassword.component.html',
  styleUrls: ['./oldpassword.component.css']
})
export class OldpasswordComponent implements OnInit {

  id:number=0;
  password:string="";
  empdata:any=[];

  constructor(private _empser:EmpSerService,private _route:Router) { }

  ngOnInit(): void {
   
  }
  checkEmpdata(){
    this._empser.getAllEmployee().subscribe((res:any)=>{this.empdata=res
    const data=this.empdata.filter((item:any)=>(item.password==this.password));
    if(data.length>0){
      
      this._route.navigate(['/employee','changepassword'])
    }
    else{
      
     alert("password not matched")
     
      
     
     
    }
    })
  }

}
