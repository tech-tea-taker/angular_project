import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeDetailsService } from '../Authenticate_services/employee-details.service';
import { EmployeeService } from '../Authenticate_services/employee.service';

@Component({
  selector: 'app-employee-after-login',
  templateUrl: './employee-after-login.component.html',
  styleUrls: ['./employee-after-login.component.css']
})
export class EmployeeAfterLoginComponent implements OnInit{

  message:String;

  constructor(private router:Router,
              private service:EmployeeService,
              private detail_service:EmployeeDetailsService){}
  ngOnInit(): void {
   this.onRefresh();
  }
  
  onLogout(){
    localStorage.removeItem('token');
    this.router.navigate(["/"]);

  }

  onRefresh(){
    var tkn =localStorage.getItem('token');
    if(tkn!=null){
    this.service.tokenValidation(tkn).subscribe(
    (data)=>{
      if(data=="false"){
       this.router.navigate(["/timeout"]);
      }
    }
    );
  }
  else{
    this.router.navigate(["/"]);
  }
  }

  addingEmp(data:NgForm){
    const reg = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);    
    const email = data.value["email"];
    const phone=data.value["phone_no"];
    if(!reg.test(email) || (phone.length!= 10)){
      this.message="Enter the valid email or phone no.";
    }
    else{
  this.detail_service.addEmployee(data.value).subscribe(
    (res:any)=>{
      if(res=="added"){
        this.message=res;
      }
      else{
        this.message=res;
      }
    }
  );
  }
  }

}
