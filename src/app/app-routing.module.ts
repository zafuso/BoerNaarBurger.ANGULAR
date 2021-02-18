import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import {AccountOverviewComponent} from './dashboard/account/account-overview.component';
import {PasswordResetComponent} from './pages/login/password-reset/password-reset.component';
import {ChangePasswordComponent} from './pages/login/change-password/change-password.component';
import {AccountEditComponent} from './dashboard/account/account-edit/account-edit.component';
import {AuthGuard} from './auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'login', component: LoginComponent},
  {path: 'password-reset', component: PasswordResetComponent},
  {path: 'change-password', component: ChangePasswordComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'account', component: AccountOverviewComponent, canActivate: [AuthGuard]},
  {path: 'account/edit', component: AccountEditComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
