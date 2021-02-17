import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import {AccountOverviewComponent} from './dashboard/account/account-overview.component';
import {BeforeLoginService} from './services/before-login.service';
import {AfterLoginService} from './services/after-login.service';
import {PasswordResetComponent} from './pages/login/password-reset/password-reset.component';
import {ChangePasswordComponent} from './pages/login/change-password/change-password.component';
import {AccountEditComponent} from './dashboard/account/account-edit/account-edit.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'login', component: LoginComponent, canActivate: [BeforeLoginService]},
  {path: 'password-reset', component: PasswordResetComponent, canActivate: [BeforeLoginService]},
  {path: 'change-password', component: ChangePasswordComponent, canActivate: [BeforeLoginService]},
  {path: 'register', component: RegisterComponent, canActivate: [BeforeLoginService]},
  {path: 'account', component: AccountOverviewComponent, canActivate: [AfterLoginService]},
  {path: 'account/edit', component: AccountEditComponent, canActivate: [AfterLoginService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
