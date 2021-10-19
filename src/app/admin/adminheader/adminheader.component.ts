import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.css']
})
export class AdminheaderComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  logout()
  {
    if(confirm('Do you want to logout')){
      this._router.navigate(['/'])

    }
  }

}
