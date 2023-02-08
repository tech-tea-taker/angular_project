import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../Authenticate_services/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
 
  constructor(private service: EmployeeService,
              private router:Router){}
  ngOnInit(): void {
  this.validationToken();
  }

  public validationToken(){
    var tk =localStorage.getItem('token');
    if(tk!=null){
    this.service.tokenValidation(tk).subscribe(
      (data)=>{
        if(data=="true"){
           this.router.navigate(["/login/employee_after_login"]);
        }
        else{
          this.router.navigate(["/timeout"]);
        }
      }
    );
    
  }else{
      this.router.navigate(["/"]);
  }
  }

}
