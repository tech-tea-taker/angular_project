import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Authenticate_services/admin.service';
import { EmployeeDetailsService } from 'src/app/Authenticate_services/employee-details.service';
import { EmployeeDetailsModel } from 'src/app/Authentication_model/employee_details.model';

@Component({
  selector: 'app-admin-after-login',
  templateUrl: './admin-after-login.component.html',
  styleUrls: ['./admin-after-login.component.css']
})
export class AdminAfterLoginComponent implements OnInit{

  employee:EmployeeDetailsModel[];

  constructor(private router:Router,
              private service:AdminService,
              private empService:EmployeeDetailsService){}
  ngOnInit(): void {
    this.getAllEmpDetails();
   this.onRefresh();
  }


  onAdminLogout(){
    localStorage.removeItem('token2');
    this.router.navigate(["/admin"]);
  }

  onRefresh(){
    var tkn =localStorage.getItem('token2');
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
    this.router.navigate(["/admin"]);
  }
  }

  getAllEmpDetails(){
    this.empService.getAllEmployee().subscribe(
      (res: any)=>{
       this.employee=res;     
       }
    );
    console.log(this.employee);
  }
}
