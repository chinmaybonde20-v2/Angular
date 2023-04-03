import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './MyComponents/header/about/about.component';
import { ContactComponent } from './MyComponents/header/contact/contact.component';
import { AddApartmentFormComponent } from './MyComponents/add-apartment-form/add-apartment-form.component';
import { ApartmentTableComponent } from './MyComponents/apartment-table/apartment-table.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { LoginFormComponent } from './MyComponents/header/login-form/login-form.component';
import { SignupFormComponent } from './MyComponents/header/signup-form/signup-form.component';
import { NameplatePageComponent } from './MyComponents/nameplate-page/nameplate-page.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'add-apartment',
    component: AddApartmentFormComponent
  }, {
    path: 'apartment-table',
    component: ApartmentTableComponent
  }, {
    path: 'login-form',
    component: LoginFormComponent
  }, {
    path: 'signup-form',
    component: SignupFormComponent
  }, {
    path: 'nameplates-page',
    component: NameplatePageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
