import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DistrictComponent } from './pages/district/district.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NavbarComponent } from './utils/navbar/navbar.component';
import { FooterComponent } from './utils/footer/footer.component';
import { SingleComponent } from './pages/single/single.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
   
    HomepageComponent,
    DistrictComponent,
    LoginComponent,
    SignupComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    SingleComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
