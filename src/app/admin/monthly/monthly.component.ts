import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpSerService } from 'src/app/shared/service/emp-ser.service';

@Component({
  selector: 'app-monthly',
  templateUrl: './monthly.component.html',
  styleUrls: ['./monthly.component.css']
})
export class MonthlyComponent implements OnInit {

  datearr:any=[];
  date1:any;
  date2:any;
  month:any;
  year:any;
  p:number=1;
  term:string="";
  constructor(private _empser:EmpSerService,private _router:Router) { }

  ngOnInit(): void {
    this.fetchyearly();
  
  }

  fetchyearly(){

    this.month=sessionStorage.getItem("date1")
    this.year=sessionStorage.getItem("date2")
    
 

  this.date1=this.year+"-"+this.month+"-"+0o1;
  this.date2=this.year+"-"+this.month+"-"+31;



    this._empser.getcustomdate(this.date1,this.date2).subscribe((res)=>{
      this.datearr=res;
      console.log(this.datearr);
      console.log(res);
     
    })

}
}
