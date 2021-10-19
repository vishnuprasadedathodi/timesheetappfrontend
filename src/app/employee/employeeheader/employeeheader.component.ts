import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeeheader',
  templateUrl: './employeeheader.component.html',
  styleUrls: ['./employeeheader.component.css']
})
export class EmployeeheaderComponent implements OnInit {

  constructor(private _route:Router) { }

  ngOnInit(): void {
  }

  logout()
  {
    if(confirm('Do you want to logout')){
      this._route.navigate(['/'])

    }
  }

}
