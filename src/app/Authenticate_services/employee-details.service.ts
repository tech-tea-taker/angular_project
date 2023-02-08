import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { EmployeeDetailsModel } from '../Authentication_model/employee_details.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailsService {

  private url="http://localhost:8081/employee/details";

  constructor(private http: HttpClient) { }

  public getAllEmployee(){
    // const tkn= localStorage.getItem('token');
    // if(tkn!=null){
    // const head=new HttpHeaders({Authorization:"Bearer "+tkn});
    return this.http.get(`${this.url}/allemp`
    // ,{headers:head}
    );
  // }else{
  //   return this.http.get(`${this.url}/error`);
  // }
  }

  public findEmployees(id: String){
    const tkn= localStorage.getItem('token');
    if(tkn!=null){
    const head=new HttpHeaders({Authorization:"Bearer "+tkn});
    return this.http.get(`${this.url}/findEmployee/${id}`,{headers:head});
  }else{
    return this.http.get(`${this.url}/error`);
  }
  }

  public addEmployee(emp:EmployeeDetailsModel){
    const tkn= localStorage.getItem('token');
    if(tkn!=null){
    const head=new HttpHeaders({Authorization:"Bearer "+tkn});
    return this.http.post(`${this.url}/createEmployee/`,emp,{headers:head,responseType:"text"});
  }else{
    return this.http.get(`${this.url}/error`);
  }
  }
  }

