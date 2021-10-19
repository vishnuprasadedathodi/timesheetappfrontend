import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpSerService } from 'src/app/shared/service/emp-ser.service';

@Component({
  selector: 'app-yearlydate',
  templateUrl: './yearlydate.component.html',
  styleUrls: ['./yearlydate.component.css']
})
export class YearlydateComponent implements OnInit {
  datearr:any=[];
  date1:any;
  date2:any;
  year:any;
  p:number=1;
  term:string="";
 
  constructor(private _empser:EmpSerService,private _router:Router) { }

  ngOnInit(): void {
    this.fetchyearly();
  
  }

  fetchyearly(){

   
    this.year=sessionStorage.getItem("year")

    this.date1=this.year+"-"+0o1+"-"+0o1;
    this.date2=this.year+"-"+12+"-"+31;



    this._empser.getcustomdate(this.date1,this.date2).subscribe((res)=>{
      this.datearr=res;
      console.log(this.datearr);
      console.log(res);
     
    })

}

}
