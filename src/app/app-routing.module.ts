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


const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'users', component: UserListComponent},
  {path:'users/:id', component: UpdateUserComponent},
  {path: 'pages', component: PaginationComponent},
  {path: 'date', component: DateSearchComponent},
  {path:'**', component: NotFoundComponent}
  // {path: 'dashboard/detail/:id', component: ItemDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
