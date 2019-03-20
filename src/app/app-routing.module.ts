import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactusComponent } from './components/contactus/contactus.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { EventComponent } from './components/event/event.component';
import { FormComponent } from './components/form/form.component';
import { ReactiveformComponent } from './components/reactiveform/reactiveform.component';
import { LoginComponent } from './components/login/login.component';
import { ProductComponent } from './components/product/product.component';
import { AuthGuard } from './guards/auth.guard';

import { ParentComponent } from './components/parent/parent.component';

const routes: Routes = [{
  path:'home',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'about',component:AboutComponent},
  {path:"employee",component:EmployeelistComponent},
  {path:'contactus',component:ContactusComponent,canDeactivate:[AuthGuard]},
  {path:'eventDemo',component:EventComponent},
  {path:'form',component:FormComponent},
  {path:'reactiveform',component:ReactiveformComponent},
  {path:'login',component:LoginComponent},
  {path:'parentToChild',component:ParentComponent},
  {path:'serviceDemo',component:ProductComponent},
  {path:'**',component:PagenotfoundComponent,}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
