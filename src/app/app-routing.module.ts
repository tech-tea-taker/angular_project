import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAfterLoginComponent } from './admin/admin-after-login/admin-after-login.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminRegistrationComponent } from './admin/admin-registration/admin-registration.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeeAfterLoginComponent } from './employee-after-login/employee-after-login.component';
import { GetAllDetailsComponent } from './get-all-details/get-all-details.component';
import {HomeComponent} from './home/home.component'
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { TimeoutComponent } from './timeout/timeout.component';

const routes: Routes = [
  {path: "",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"registration",component:RegistrationComponent},
  {path:"admin",component:AdminComponent},
  {path:"admin/admin_login",component:AdminLoginComponent},
  {path:"admin/admin_registration",component:AdminRegistrationComponent},
  {path:"login/employee_after_login",component:EmployeeAfterLoginComponent},
  {path:"timeout",component:TimeoutComponent},
  {path:"login/employee_after_login/getAll",component:GetAllDetailsComponent},
  {path:"admin/admin_login/admin_after_login",component:AdminAfterLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
