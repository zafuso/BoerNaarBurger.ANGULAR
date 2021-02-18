import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AccountOverviewComponent} from './dashboard/account/account-overview.component';
import { FormsModule } from '@angular/forms';
import { PasswordResetComponent } from './pages/login/password-reset/password-reset.component';
import { ChangePasswordComponent } from './pages/login/change-password/change-password.component';
import { AccountEditComponent } from './dashboard/account/account-edit/account-edit.component';
import {AuthGuard} from './auth.guard';
import {JWT_OPTIONS, JwtHelperService, JwtModule} from '@auth0/angular-jwt';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    AccountOverviewComponent,
    PasswordResetComponent,
    ChangePasswordComponent,
    AccountEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    JwtModule
  ],
  providers: [
    [AuthGuard],
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
