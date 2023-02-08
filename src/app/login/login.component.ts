import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../Authenticate_services/employee.service';
import { EmployeeAfterLoginComponent } from '../employee-after-login/employee-after-login.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  message:String;
  
 constructor(private service:EmployeeService,
            //  private emp_after_login:EmployeeAfterLoginComponent
             private router: Router){}

  onAuthentication(data:NgForm){

    const reg = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);    
    const email = data.value["email"];
    const password=data.value["password"];
    if(!reg.test(email) || (password.length<=7 )){
      this.message="Enter the correct email or password.";
    }
  else{
   this.service.AuthenticateEmployee(data.value).subscribe(
    (res)=>{
      if(res=="email or password does not match"){
        this.message="email or password does not match"
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
        localStorage.setItem('token',res);
        this.router.navigate(["/login/employee_after_login"]);
      }

    }
  }
    }
   );
  }
  }

}
