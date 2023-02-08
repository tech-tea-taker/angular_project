import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../Authenticate_services/employee.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{

  message: String;
  error_message: String;
constructor(private empservice:EmployeeService,
            private router: Router){}
  ngOnInit(): void {
    this.router.navigateByUrl("/registration");

  }

  onRegistration(data:NgForm){
    const reg = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);    
    const email = data.value["email"];
    const password=data.value["password"];
    if(!reg.test(email) || (password.length<=7 )){
      this.error_message="Enter the correct email or password.";
    }
    else{
      this.empservice.RegisterEmployee(data.value).subscribe(
        (res)=>{
          if(res=="email already in use."){
            this.message=res;
          }
          else{
        if(res=="Employee Added."){
           this.message=res;
           data.resetForm();
        }else{
          this.message="There is an internal error.";
        }
      }
        
    }
       );}

    }

  
   }
  


