import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpSerService } from 'src/app/shared/service/emp-ser.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  p:number=1;
  emparray:any=[];
  term:string="";
  order:any;
  reverse:boolean=false;

  constructor(private _empser:EmpSerService,private _router:Router) { }

  ngOnInit(): void {
    this.fetchData();
  
  }

  fetchData(){

    this._empser.getAllEmployee().subscribe((res)=>{
      this.emparray=res;
      console.log(this.emparray);
      console.log(res);
    })

  }
  deleteEmployee(id:any)
  {
    if(confirm(`Do you want to delete  ${id}`)){
      this._empser.deleteEmployee(id).subscribe(()=>this.fetchData())
      // this._router.navigate(['admin/dashboard'])
    }
  }
  logout()
  {
    if(confirm('Do you want to logout')){
      this._router.navigate(['/'])

    }
  }
  changeOrder(val:any){
    if(val=="name"){
      this.order="name";
      this.reverse=!this.reverse;
    }
    if(val=="id"){
      this.order="id";
      this.reverse=!this.reverse;
    }
    if(val=="age"){
      this.order="age";
      this.reverse=!this.reverse;
    
  }
  

}}
