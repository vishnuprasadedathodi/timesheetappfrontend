import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpSerService } from 'src/app/shared/service/emp-ser.service';

@Component({
  selector: 'app-customdate',
  templateUrl: './customdate.component.html',
  styleUrls: ['./customdate.component.css']
})
export class CustomdateComponent implements OnInit {


  datearr:any=[];
  date1:any;
  date2:any;
  p:number=1;
  term:string="";
  constructor(private _empser:EmpSerService,private _router:Router) { }

  ngOnInit(): void {
    this.fetchData();
  
  }

  fetchData(){

    this.date1=sessionStorage.getItem("date1")
    this.date2=sessionStorage.getItem("date2")
    this._empser.getcustomdate(this.date1,this.date2).subscribe((res)=>{
      this.datearr=res;
      console.log(this.datearr);
      console.log(res);
    })

}
}
