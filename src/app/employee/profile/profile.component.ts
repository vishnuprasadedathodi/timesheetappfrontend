import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpSerService } from 'src/app/shared/service/emp-ser.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  id:any;
  emparray:any=[];
  constructor(private _empser:EmpSerService,private _route:Router) { }

  ngOnInit(): void {
    this.singleData()
  }
  singleData()
  {
  
    this.id= sessionStorage.getItem("user");
    this._empser.getSingleRecord(this.id).subscribe((res)=>{
      this.emparray=res;
      console.log(this.emparray);
      
    })
  }
  

}
