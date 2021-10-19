import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpSerService } from 'src/app/shared/service/emp-ser.service';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  constructor(private _http:HttpClient,private _empser:EmpSerService,private _route:Router) { }
  date1:any;
  date2:any;
  date3:any;
  date4:any;
  date5:any;
  date6:any;
  year:any;
  month:any;

  ngOnInit(): void {
    sessionStorage.removeItem("date1");
    sessionStorage.removeItem("date2")
    sessionStorage.removeItem("year");
  }
  checkdate(){
    console.log(this.date1);
    console.log(this.date2)
    this._empser.date1(this.date1);
    this._empser.date2(this.date2);
    
    
    
    this._route.navigate(['/admin/customdate'])
    
  }

  checkyearly(){
    console.log(this.year);
   
    this._empser.year(this.year)

  
    
    this._route.navigate(['/admin/yearlydate'])

  }

  checkmonthly(){
    console.log(this.month);
    console.log(this.year);
 
    this._empser.date1(this.month);
    this._empser.date2(this.year);

  
    
    this._route.navigate(['/admin/monthly'])

  }



}
