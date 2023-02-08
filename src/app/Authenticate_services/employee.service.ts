import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employeeloginmodel } from '../Authentication_model/employee_login.model';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private path="http://localhost:8081/employee/auth";

  constructor(private http: HttpClient) { }

  public AuthenticateEmployee(emp:Employeeloginmodel){
    return this.http.post(`${this.path}/authenticate`,emp,{responseType:'text'});
  }

  public RegisterEmployee(emp:Employeeloginmodel){
    return this.http.post(`${this.path}/registration`,emp,{responseType:'text'});
  }

  public tokenValidation(token:String){
    return this.http.get(`${this.path}/tokenValidation/${token}`,{responseType:'text'});
  }

}
