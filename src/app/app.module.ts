import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdminComponent } from './admin/admin.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminRegistrationComponent } from './admin/admin-registration/admin-registration.component';
import {HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EmployeeAfterLoginComponent } from './employee-after-login/employee-after-login.component';
import { TimeoutComponent } from './timeout/timeout.component';
import { GetAllDetailsComponent } from './get-all-details/get-all-details.component';
import { EmployeeService } from './Authenticate_services/employee.service';
import { EmployeeDetailsService } from './Authenticate_services/employee-details.service';
import { AdminAfterLoginComponent } from './admin/admin-after-login/admin-after-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    AdminComponent,
    AdminLoginComponent,
    AdminRegistrationComponent,
    EmployeeAfterLoginComponent,
    TimeoutComponent,
    GetAllDetailsComponent,
    AdminAfterLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [EmployeeService,EmployeeDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
