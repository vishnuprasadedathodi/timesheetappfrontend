import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpSerService } from '../shared/service/emp-ser.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  username:string="";
  password:string="";
  admindata:any=[];

  constructor(private _empser:EmpSerService,private _router:Router) { }

  ngOnInit(): void {
    this._empser.signout();
    
  }
  checkdata(){
    this._empser.getlogincredential().subscribe((res:any)=>{this.admindata=res;
    const data=this.admindata.filter((item:any)=>(item.username==this.username)&&(item.password==this.password));
   
    if(data.length>0){
      this._empser.signin(this.username)
      // this._empser.signin(this.password);
      this._router.navigate(['/admin/dashboard'])
    }
    else{
      alert("invalid credential");
      this.username="";
      this.password="";
    }
    })
  }

}
