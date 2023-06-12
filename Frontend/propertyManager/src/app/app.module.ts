import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HpTenantComponent } from './pages/hp-tenant/hp-tenant.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './componentsT/dashboard/dashboard.component';
import { SliderComponent } from './componentsT/slider/slider.component';
import { HpLandlordComponent } from './pages/hp-landlord/hp-landlord.component';
import { TenantsComponent } from './componentsL/tenants/tenants.component';
import { ReportsComponent } from './componentsL/reports/reports.component';
import { PropertiesComponent } from './componentsL/properties/properties.component';
import { DashboardLComponent } from './componentsL/dashboard-l/dashboard-l.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomePageComponent,
    LoginPageComponent,
    HeaderComponent,
    FooterComponent,
    HpTenantComponent,
    DashboardComponent,
    SliderComponent,
    HpLandlordComponent,
    TenantsComponent,
    ReportsComponent,
    PropertiesComponent,
    DashboardLComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
