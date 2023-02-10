import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DistrictComponent } from './pages/district/district.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SingleComponent } from './pages/single/single.component';

const routes: Routes = [

{
  path:'',
  component:HomepageComponent 
},

{
  path:'contact',
  component:ContactComponent 
},
{
  path:'district',
  component:DistrictComponent
},
{
  path:'login',
  component:LoginComponent
},
{
  path:'signup',
  component:SignupComponent
},
{
  path:'single',
  component:SingleComponent
},
{
  path:'form',
  component:FormComponent 
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
