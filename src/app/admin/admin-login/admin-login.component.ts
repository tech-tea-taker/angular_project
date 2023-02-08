import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Authenticate_services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  message:String;
  constructor(private service:AdminService,
              private router:Router){}

  onAuth(data:NgForm){

    const reg = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);    
    const email = data.value["email"];
    const password=data.value["password"];
    if(!reg.test(email) || (password.length<=7 )){
      this.message="Enter the correct email or password.";
    }
  else{
    this.service.AuthenticateAdmin(data.value).subscribe(

      (res)=>{
        if(res=="email or password does not match"){
          this.message=res;
        }
        else{
      if(res=="there is an error"){
        this.message="User not Registered."
      }
      else{
        if(res=="User not Authenticated"){
          this.message="There is an internal error."
        }
        else{
          localStorage.setItem('token2',res);
          this.router.navigate(["/admin/admin_login/admin_after_login"]);
        }
  
      }
    }
      }
    );
  }
  }



}
