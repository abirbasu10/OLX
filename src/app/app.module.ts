import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import{HashLocationStrategy,LocationStrategy} from '@angular/common';

import { AppRoutingModule } from './app.routing';
import { ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';

//import { AgmCoreModule } from '@agm/core';


import { NotificationsComponent } from './notifications/notifications.component';


import { IndexComponent } from './index/index.component';
import { CompanyChangePasswordComponent } from './company/company-change-password/company-change-password.component';
import { CompanyDashboardComponent } from './company/company-dashboard/company-dashboard.component';

import { CompanyFooterComponent } from './company/company-footer/company-footer.component';
import { CompanyNavbarComponent } from './company/company-navbar/company-navbar.component';
import { CompanySidebarComponent } from './company/company-sidebar/company-sidebar.component';
import { CompanyRegisterComponent } from './company/company-register/company-register.component';
import { CompanyLoginComponent } from './company/company-login/company-login.component';
import { CompanyProfileComponent } from './company/company-profile/company-profile.component'; 
import { EmployeeDetailsComponent } from './company/employee-details/employee-details.component';
import { CompanyEmployeeManagementComponent } from './company/company-employee-management/company-employee-management.component';
import { CompanyAddEditEmployeeComponent } from './company/company-add-edit-employee/company-add-edit-employee.component';
/* import { CompanyComponent } from './company/company.component';

import { CompanyOrdersComponent } from './company/company-orders/company-orders.component';
import { CompanyOrderDetailsComponent } from './company/company-order-details/company-order-details.component';

import { ProvisionsDeliveryComponent } from './company/provisions-delivery/provisions-delivery.component';
import { CompanyVesselManagementComponent } from './company/company-vessel-management/company-vessel-management.component';

import { VoyageComponent } from './company/voyage/voyage.component'; */

/*
import { VesselDetailsComponent } from './company/vessel-details/vessel-details.component';
import { ExchangeRatesComponent } from './company/exchange-rates/exchange-rates.component';
import { VendorListComponent } from './company/vendor-list/vendor-list.component'; 




import { CompanyAddCrewComponent } from './company/company-add-crew/company-add-crew.component';
import { CompanyAddVesselComponent } from './company/company-add-vessel/company-add-vessel.component'







import { CompanyVendorDetailsComponent } from './company/company-vendor-details/company-vendor-details.component';

import { CompanyVesselDashboardComponent } from './company/company-vessel-dashboard/company-vessel-dashboard.component';
*/


import { MatSlideToggleModule,MatTableDataSource, MatListModule,MatDividerModule,MatTabsModule,MatCardModule, MatInputModule,MatChipsModule,MatFormFieldModule,MatFormFieldControl,MatSelectModule,MatDialogModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, MatStepperModule,MatIconModule } from '@angular/material';
//import { MatMomentDateModule } from '@angular/material-moment-adapter';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatRadioModule} from '@angular/material/radio';



import {MatTableModule} from '@angular/material/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



import { LandingComponent } from './landing/landing.component';



import { LandingNavbarComponent } from './landing-navbar/landing-navbar.component';
import { LandingSidebarComponent } from './landing-sidebar/landing-sidebar.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PlaceAdComponent } from './place-ad/place-ad.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { AdvertisementSidebarComponent } from './advertisement/advertisement-sidebar/advertisement-sidebar.component';
//import { AdvertisementNavbarComponent } from './advertisement/advertisement-navbar/advertisement-navbar.component';
import { AdvertisementFooterComponent } from './advertisement/advertisement-footer/advertisement-footer.component';
import { AdvertisementManagmentComponent } from './advertisement/advertisement-managment/advertisement-managment.component';
import { CreateAdvertisementComponent } from './advertisement/create-advertisement/create-advertisement.component';
import { AdvertisementDetailsComponent } from './advertisement/advertisement-details/advertisement-details.component';
import { AdminComponent } from './admin/admin.component';
import { LogisticsComponent } from './logistics/logistics.component';
import { LogisticsFirmProfileComponent } from './company/logistics-firm-profile/logistics-firm-profile.component';
import { LogisticsCompanyDetailsComponent } from './logistics/logistics-company-details/logistics-company-details.component';
import { LogisticsProfileComponent } from './logistics/logistics-profile/logistics-profile.component';

import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminSidebarComponent } from './admin/admin-sidebar/admin-sidebar.component';
import { LogisticsDashboardComponent } from './logistics/logistics-dashboard/logistics-dashboard.component';
import { LogisticsSidebarComponent } from './logistics/logistics-sidebar/logistics-sidebar.component';

import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { LogisticsLoginComponent } from './logistics/logistics-login/logistics-login.component';
import { LogisticsRegisterComponent } from './logistics/logistics-register/logistics-register.component';
import { LogisticsChangePasswordComponent } from './logistics/logistics-change-password/logistics-change-password.component';
import { AdminChangePasswordComponent } from './admin/admin-change-password/admin-change-password.component';
import { CompanyMessageDetailsComponent } from './company/company-message-details/company-message-details.component';
import { CompanyMessageListComponent } from './company/company-message-list/company-message-list.component';
import { LogisticsMessageListComponent } from './logistics/logistics-message-list/logistics-message-list.component';
import { LogisticsMessageDetailsComponent } from './logistics/logistics-message-details/logistics-message-details.component';


import {MatProgressBarModule} from '@angular/material/progress-bar';
import { AdminCategoryManagementComponent } from './admin/admin-category-management/admin-category-management.component';

//import { ImageUploadModule } from "angular2-image-upload";
import { ProvideQuotationComponent } from './logistics/provide-quotation/provide-quotation.component';
import { LogisticsRequestListComponent } from './logistics/logistics-request-list/logistics-request-list.component';
import { AdminUserManagementComponent } from './admin/admin-user-management/admin-user-management.component';
import { AddEditUsersComponent } from './admin/add-edit-users/add-edit-users.component';
import { AdminCompanyDetailsComponent } from './admin/admin-company-details/admin-company-details.component';
import { AdminCompanyManagementComponent } from './admin/admin-company-management/admin-company-management.component';

import { AddEditCompanyComponent } from './admin/add-edit-company/add-edit-company.component';
import { FilterManagementComponent } from './admin/filter-management/filter-management.component';

import { LogisticsPromoteComponent } from './logistics/logistics-promote/logistics-promote.component';
import { LogisticsProfileCompletionComponent } from './logistics/logistics-profile-completion/logistics-profile-completion.component';
import { CompanySellerMessageDetailsComponent } from './company/company-seller-message-details/company-seller-message-details.component';
import { CompanyBuyerMessageDetailsComponent } from './company/company-buyer-message-details/company-buyer-message-details.component';
import { CompanyBuyerMessageListComponent } from './company/company-buyer-message-list/company-buyer-message-list.component';
import { CompanySellerMessageListComponent } from './company/company-seller-message-list/company-seller-message-list.component';
import { CompanyAdRequestListComponent } from './company/company-ad-request-list/company-ad-request-list.component';
import { CompanyMyAdsComponent } from './company/company-my-ads/company-my-ads.component';
//import { AngularChromeImageStorageComponent } from '../../node_modules/angular-chrome-image-storage-master/angular-chrome-image-storage';

/* import { VendorComponent } from './vendor/vendor.component';
import { VendorProfileComponent } from './vendor/vendor-profile/vendor-profile.component'; */

@NgModule({
  declarations: [
    AppComponent,
    NotificationsComponent,
    IndexComponent,
     
    CompanyFooterComponent,
    CompanyNavbarComponent,
    CompanySidebarComponent, 
    EmployeeDetailsComponent,
    CompanyEmployeeManagementComponent,
    CompanyLoginComponent,
    CompanyRegisterComponent,
    CompanyChangePasswordComponent,
    CompanyProfileComponent,
    CompanyDashboardComponent,
    CompanyAddEditEmployeeComponent,
    /*CompanyOrdersComponent,
    CompanyOrderDetailsComponent,
    
    ProvisionsDeliveryComponent,
    CompanyVesselManagementComponent,
    
    VoyageComponent,
CompanyComponent,
   
    VesselDetailsComponent,
    ExchangeRatesComponent,
    VendorListComponent,
    
    CompanyAddCrewComponent,
    CompanyAddVesselComponent,


    CompanyVendorDetailsComponent,

    CompanyVesselDashboardComponent, 
    
    */

    

    /* CompanyPurchaseOrderComponent,
    VendorDeliveryOrderComponent,
    ViewDeliveryOrderComponent, */

    LandingComponent,

    

    LandingNavbarComponent,

    LandingSidebarComponent,


    LoginComponent,

    RegisterComponent,

    PlaceAdComponent,

    AdvertisementComponent,

    AdvertisementSidebarComponent,

  //  AdvertisementNavbarComponent,

    AdvertisementFooterComponent,

    AdvertisementManagmentComponent,

    CreateAdvertisementComponent,


    /* VendorComponent,

    VendorProfileComponent,
 */
    AdvertisementDetailsComponent,

    AdminComponent,

    LogisticsComponent,

    LogisticsFirmProfileComponent,

    LogisticsCompanyDetailsComponent,

    LogisticsProfileComponent,

    AdminDashboardComponent,

    AdminSidebarComponent,

    LogisticsDashboardComponent,

    LogisticsSidebarComponent,

    AdminLoginComponent,

    LogisticsLoginComponent,

    LogisticsRegisterComponent,

    LogisticsChangePasswordComponent,

    AdminChangePasswordComponent,

    AdminCategoryManagementComponent,
    CompanyMessageDetailsComponent,

    CompanyMessageListComponent,

    LogisticsMessageListComponent,

    LogisticsMessageDetailsComponent,

    ProvideQuotationComponent,

    LogisticsRequestListComponent,

    AdminUserManagementComponent,

    AddEditUsersComponent,

    AdminCompanyDetailsComponent,

    AdminCompanyManagementComponent,


    AddEditCompanyComponent,


    FilterManagementComponent,


    
    LogisticsPromoteComponent,

    LogisticsProfileCompletionComponent,

    CompanySellerMessageDetailsComponent,

    CompanyBuyerMessageDetailsComponent,

    CompanyBuyerMessageListComponent,

    CompanySellerMessageListComponent,

    CompanyAdRequestListComponent,

    CompanyMyAdsComponent,

    //AngularChromeImageStorageComponent,


    //AdminSubscriptionManagementComponent

    
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  
    /*             MatTabsModule,
                MatCardModule, */
    RouterModule,
    //Ng2YaTableModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    
    //MatStepperModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatDividerModule,
    // AgmCoreModule.forRoot({
    //   apiKey: "AIzaSyAhDOT-biiekU-43wQPfQyk2W7Oi74mh0A",
    //   libraries: ["places"]
    // }),
    MatSelectModule,
    MatTooltipModule,
    MatRadioModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    //MatMomentDateModule,
    MatStepperModule,
    MatIconModule,
    MatChipsModule,


    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatSlideToggleModule,

   // ImageUploadModule.forRoot(),
/*     AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA_h565MUlULgemvbsLJeizADz-wQ3FUp8'
    }), */

    
    MatProgressBarModule,

  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
   entryComponents: [
    AddEditUsersComponent,
    AddEditCompanyComponent,
   // CompanyAddVesselComponent,
    CompanyAddEditEmployeeComponent,
  ] ,
  
   
  

  
})
export class AppModule { }
