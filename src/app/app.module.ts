import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './MyComponents/header/navbar/navbar.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { SidebarComponent } from './MyComponents/sidebar/sidebar.component';
import { AboutComponent } from './MyComponents/header/about/about.component';
import { ContactComponent } from './MyComponents/header/contact/contact.component';
import { AddApartmentFormComponent } from './MyComponents/add-apartment-form/add-apartment-form.component';
import { ApartmentTableComponent } from './MyComponents/apartment-table/apartment-table.component';
import { LoginFormComponent } from './MyComponents/header/login-form/login-form.component';
import { SignupFormComponent } from './MyComponents/header/signup-form/signup-form.component';
import { NameplatePageComponent } from './MyComponents/nameplate-page/nameplate-page.component';
// Services
import { LoginDataService } from './MyServices/LoginData/login-data.service';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SidebarComponent,
    AboutComponent,
    ContactComponent,
    AddApartmentFormComponent,
    ApartmentTableComponent,
    LoginFormComponent,
    SignupFormComponent,
    NameplatePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [
    LoginDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
