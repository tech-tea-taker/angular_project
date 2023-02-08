import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeDetailsService } from '../Authenticate_services/employee-details.service';
import { EmployeeDetailsModel } from '../Authentication_model/employee_details.model';

@Component({
  selector: 'app-get-all-details',
  templateUrl: './get-all-details.component.html',
  styleUrls: ['./get-all-details.component.css']
})
export class GetAllDetailsComponent implements OnInit{

  emp: EmployeeDetailsModel[];
  findEmp: EmployeeDetailsModel[];
  message:String;
  msg:String;


  constructor(private service : EmployeeDetailsService){}

  ngOnInit(): void {
  this.getAllEmp();
  }

  getAllEmp(){
    this.service.getAllEmployee().subscribe(
      (data:any)=>{
        this.emp=data;
      }
    );
  }

  SearchEmp(data:NgForm){
    this.service.findEmployees(data.value["findEmp"]).subscribe(
      (res:any)=>{
        if(res!=null){
       this.findEmp=res;
        }
        else{
        this.msg="null";
        }
      }
    );
  }

  onclk(){
   this.message="another";
    
  }

  

}
