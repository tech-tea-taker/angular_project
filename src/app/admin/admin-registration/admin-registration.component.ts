import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from 'src/app/Authenticate_services/admin.service';

@Component({
  selector: 'app-admin-registration',
  templateUrl: './admin-registration.component.html',
  styleUrls: ['./admin-registration.component.css']
})
export class AdminRegistrationComponent {

  message:String;

  constructor(private service:AdminService){}

  onsubmit(data:NgForm){
    const reg = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);    
    const email = data.value["email"];
    const password=data.value["password"];
    if(!reg.test(email) || (password.length<=7 )){
      this.message="Enter the correct email or password.";
    }
    else{
  this.service.RegisterAdmin(data.value).subscribe(
    (res)=>{
      if(res=="email already in use"){
        this.message=res;
      }
      else{
    if(res=="Admin Added Successfully"){
       this.message=res;
       data.resetForm();
    }else{
      this.message="There is an internal error.";
    }
  }
    
}
    );
  }
  }
  }

