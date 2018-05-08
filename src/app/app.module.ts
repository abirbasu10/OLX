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
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { AdvertisementSidebarComponent } from './advertisement/advertisement-sidebar/advertisement-sidebar.component';
//import { AdvertisementNavbarComponent } from './advertisement/advertisement-navbar/advertisement-navbar.component';
import { AdvertisementFooterComponent } from './advertisement/advertisement-footer/advertisement-footer.component';
import { AdvertisementManagmentComponent } from './advertisement/advertisement-managment/advertisement-managment.component';
import { CreateAdvertisementComponent } from './advertisement/create-advertisement/create-advertisement.component';

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

    AdvertisementComponent,

    AdvertisementSidebarComponent,

  //  AdvertisementNavbarComponent,

    AdvertisementFooterComponent,

    AdvertisementManagmentComponent,

    CreateAdvertisementComponent,
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

/*     AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA_h565MUlULgemvbsLJeizADz-wQ3FUp8'
    }), */

    
    

  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
   entryComponents: [
   // CompanyAddVesselComponent,
    CompanyAddEditEmployeeComponent,
  ] 
})
export class AppModule { }
