import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ItemDetailComponent } from './component/dashboard-components/item-detail/item-detail.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { HomeComponent } from './component/home/home.component';
import { UpdateUserComponent } from './component/update-user/update-user.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { PaginationComponent } from './component/pagination/pagination.component';
import { DateSearchComponent } from './component/date-search/date-search.component';
import { ConfigComponent } from './component/config/config.component';
import { ShowDynamicFormComponent } from './component/show-dynamic-form/show-dynamic-form.component';
import { PackageServiceComponent } from './component/package-service/package-service.component';
import { UploaderComponent } from './component/uploader/uploader.component';


const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'users', component: UserListComponent},
  {path:'users/:id', component: UpdateUserComponent},
  {path: 'pages', component: PaginationComponent},
  {path: 'date', component: DateSearchComponent},
  {path: 'config', component: ConfigComponent},
  {path: 'dynamic-form', component: ShowDynamicFormComponent},
  {path: 'packages', component: PackageServiceComponent},
  {path: 'upload', component: UploaderComponent},
  {path:'**', component: NotFoundComponent}
  // {path: 'dashboard/detail/:id', component: ItemDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
