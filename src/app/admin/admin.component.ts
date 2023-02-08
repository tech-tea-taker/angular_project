import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../Authenticate_services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent  implements OnInit{

  constructor(private router: Router,
              private service: AdminService){}
  ngOnInit(): void {
     this.validationToken();
  }


  public validationToken(){
    var tk =localStorage.getItem('token2');
    if(tk!=null){
    this.service.tokenValidation(tk).subscribe(
      (data)=>{
        if(data=="true"){
           this.router.navigate(["/admin/admin_login/admin_after_login"]);
        }
        else{
          this.router.navigate(["/timeout"]);
        }
      }
    );
    
  }else{
      this.router.navigate(["/admin"]);
  }
  }
}
