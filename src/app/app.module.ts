import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { GridsterModule } from 'angular-gridster2';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService } from './service/in-memory-data.service';
import { ChartPieComponent } from './component/dashboard-components/chart-pie/chart-pie.component';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { GetItemsComponent } from './component/dashboard-components/get-items/get-items.component';
import { GeneralComponent } from './component/dashboard-components/general/general.component';
import { ItemDetailComponent } from './component/dashboard-components/item-detail/item-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateItemComponent } from './component/dashboard-components/create-item/create-item.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { HomeComponent } from './component/home/home.component';
import { AddUserComponent } from './component/add-user/add-user.component';
import { UpdateUserComponent } from './component/update-user/update-user.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { PaginationComponent } from './component/pagination/pagination.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { DateSearchComponent } from './component/date-search/date-search.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DynamicFormComponent } from './component/dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './component/dynamic-form-question/dynamic-form-question.component';
import { ShowDynamicFormComponent } from './component/show-dynamic-form/show-dynamic-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ChartPieComponent,
    GetItemsComponent,
    GeneralComponent,
    ItemDetailComponent,
    CreateItemComponent,
    UserListComponent,
    HomeComponent,
    AddUserComponent,
    UpdateUserComponent,
    NotFoundComponent,
    PaginationComponent,
    DateSearchComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
    ShowDynamicFormComponent,
    
  ],
  imports: [
    BrowserModule,
    GridsterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PaginationModule.forRoot(),
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // ),
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
