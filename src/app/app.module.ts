import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChilComponentComponent } from './chil-component/chil-component.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { GenderFilterPipe} from './pipe/gender-filter.pipe';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { EventComponent } from './components/event/event.component';
import { FormComponent } from './components/form/form.component'
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ReactiveformComponent } from './components/reactiveform/reactiveform.component';
import { LoginComponent } from './components/login/login.component';
import { ProductComponent } from './components/product/product.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component'


@NgModule({
  declarations: [
    AppComponent,
    ChilComponentComponent,
    EmployeelistComponent,
    AssignmentComponent,
    GenderFilterPipe,
    HomeComponent,
    AboutComponent,
    ContactusComponent,
    NavBarComponent,
    PagenotfoundComponent,
    EventComponent,
    
    FormComponent,
    
    ReactiveformComponent,
    
    LoginComponent,
    
    ProductComponent,
    
    ParentComponent,
    
    ChildComponent
 
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
