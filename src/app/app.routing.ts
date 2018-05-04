import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';


import { NotificationsComponent } from './notifications/notifications.component';


import { IndexComponent } from './index/index.component';

import { CompanyComponent } from './company/company.component';
import { CompanyLoginComponent } from './company/company-login/company-login.component';
import { CompanyChangePasswordComponent } from './company/company-change-password/company-change-password.component';
import { CompanyRegisterComponent } from './company/company-register/company-register.component';
/* import { CompanyOrdersComponent } from './company/company-orders/company-orders.component';
import { CompanyOrderDetailsComponent } from './company/company-order-details/company-order-details.component'; */
import { CompanyDashboardComponent } from './company/company-dashboard/company-dashboard.component';

import { CompanyEmployeeManagementComponent } from './company/company-employee-management/company-employee-management.component';


import { EmployeeDetailsComponent } from './company/employee-details/employee-details.component';




import { CompanyProfileComponent } from './company/company-profile/company-profile.component';
import { LandingComponent } from './landing/landing.component';



//import { AdminSubscriptionManagementComponent } from './admin/admin-subscription-management/admin-subscription-management.component';






const routes: Routes =[
    
    { path: 'company/dashboard',      component: CompanyDashboardComponent },
	  { path: 'company',      component:CompanyDashboardComponent  },   

    
    { path: 'company/profile', component: CompanyProfileComponent},
    
    
    { path: 'company/employeeManagement', component: CompanyEmployeeManagementComponent},
    { path: 'company/employeeDetails/:id', component: EmployeeDetailsComponent},
    
    { path: 'company/login', component:CompanyLoginComponent},
    { path: 'company/changePassword', component:CompanyChangePasswordComponent},
    { path: 'company/register', component: CompanyRegisterComponent},
    //{ path: 'company/purchaseOrder/:id', component: CompanyPurchaseOrderComponent},

    { path: 'notifications',  component: NotificationsComponent },
    { path: 'index',          component: IndexComponent },

     { path:'landing', component:LandingComponent},
     { path: '', redirectTo: 'landing', pathMatch: 'full' }

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }