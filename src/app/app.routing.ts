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

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdvertisementManagmentComponent } from './advertisement/advertisement-managment/advertisement-managment.component';
import { CreateAdvertisementComponent } from './advertisement/create-advertisement/create-advertisement.component';
/* import { VendorProfileComponent } from './vendor/vendor-profile/vendor-profile.component'; */
import { AdvertisementDetailsComponent } from './advertisement/advertisement-details/advertisement-details.component';
import { LogisticsFirmProfileComponent } from './company/logistics-firm-profile/logistics-firm-profile.component';
import { LogisticsCompanyDetailsComponent } from './logistics/logistics-company-details/logistics-company-details.component';
import { LogisticsProfileComponent } from './logistics/logistics-profile/logistics-profile.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { LogisticsComponent } from './logistics/logistics.component';
import { LogisticsDashboardComponent } from './logistics/logistics-dashboard/logistics-dashboard.component';

import { AdminLoginComponent} from './admin/admin-login/admin-login.component'
import {AdminChangePasswordComponent} from './admin/admin-change-password/admin-change-password.component'
import { LogisticsRegisterComponent } from './logistics/logistics-register/logistics-register.component'
import { LogisticsLoginComponent } from './logistics/logistics-login/logistics-login.component'
import {LogisticsChangePasswordComponent} from './logistics/logistics-change-password/logistics-change-password.component'
import { CompanyMessageDetailsComponent } from './company/company-message-details/company-message-details.component';
import { CompanyMessageListComponent } from './company/company-message-list/company-message-list.component';
import { LogisticsMessageListComponent } from './logistics/logistics-message-list/logistics-message-list.component';
import { LogisticsMessageDetailsComponent } from './logistics/logistics-message-details/logistics-message-details.component';


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
    { path: 'company/messageList', component:CompanyMessageListComponent},
    { path: 'company/messageDetails/:adId', component:CompanyMessageDetailsComponent},

    { path: 'company/logisticsFirmProfile', component: LogisticsFirmProfileComponent},
    //{ path: 'company/purchaseOrder/:id', component: CompanyPurchaseOrderComponent},


    {path: 'admin', component:AdminComponent},
    {path: 'admin/dashboard', component:AdminDashboardComponent },

    {path: 'logistics', component: LogisticsComponent},
    {path: 'logistics/dashboard', component:LogisticsDashboardComponent},
    

    { path: 'notifications',  component: NotificationsComponent },
    { path: 'index',          component: IndexComponent },

    { path: 'advertisements/search',  component: AdvertisementManagmentComponent },
    { path: 'advertisements/create',  component: CreateAdvertisementComponent },

    { path: '', redirectTo: 'advertisements/search', pathMatch: 'full' },
    { path: 'advertisement/:adName', component: AdvertisementDetailsComponent},
    { path: 'logistics/logisticsCompanyDetails', component: LogisticsCompanyDetailsComponent},
    { path: 'logistics/profile', component: LogisticsProfileComponent},
    { path: 'logistics/messageList', component:LogisticsMessageListComponent},
    { path: 'logistics/messageDetails/:adId', component:LogisticsMessageDetailsComponent},

    { path:'landing', component:LandingComponent},


    { path:'login_register', component:LoginComponent},
    { path:'register', component:RegisterComponent},

    /* { path:'vendor_profile', component:VendorProfileComponent} */

     { path:'admin/login', component:AdminLoginComponent},
     { path:'admin/changePassword', component:AdminChangePasswordComponent},
     { path:'logistics/login', component:LogisticsLoginComponent},
     { path:'logistics/register', component:LogisticsRegisterComponent},
     { path:'logistics/changePassword', component:LogisticsChangePasswordComponent},
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
