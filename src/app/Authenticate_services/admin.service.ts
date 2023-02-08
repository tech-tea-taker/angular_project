import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Adminloginmodel } from '../Authentication_model/admin_login.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  private path="http://localhost:8082/admin/auth"

  public AuthenticateAdmin(admin:Adminloginmodel){
    return this.http.post(`${this.path}/authenticate`,admin,{responseType:'text'});
  }

  public RegisterAdmin(admin:Adminloginmodel){
    return this.http.post(`${this.path}/registration`,admin,{responseType:'text'});
  }

  public tokenValidation(token:String){
    return this.http.get(`${this.path}/validtoken/${token}`,{responseType:'text'});
  }

}
