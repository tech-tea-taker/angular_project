import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timeout',
  templateUrl: './timeout.component.html',
  styleUrls: ['./timeout.component.css']
})
export class TimeoutComponent {

  constructor(private router:Router){
   history.pushState(null,'',window.location.href);
   window.onpopstate=function(){
    history.go(1);
   }
  }

  onHome(){
    localStorage.removeItem('token');
    this.router.navigate(["/"]);
  }

  onAdminHome(){
    localStorage.removeItem('token2');
    this.router.navigate(["/admin"]);
  }

}
