import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterComponent } from './pages/register/register.component';
import { HpTenantComponent } from './pages/hp-tenant/hp-tenant.component';
import { DashboardComponent } from './componentsT/dashboard/dashboard.component';
import { HpLandlordComponent } from './pages/hp-landlord/hp-landlord.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomePageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'hptenant', component: HpTenantComponent},
  {path: 'dashboardT', component: DashboardComponent},
  {path: 'hplandlord', component: HpLandlordComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
