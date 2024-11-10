import { Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
// import { AboutComponent } from './components/about.component';
// import { MyItemsComponent } from './components/my-items.component';
// import { RepairsComponent } from './components/repairs.component';
// import { VolunteersComponent } from './components/volunteers.component';
import { LoginComponent } from './components/login.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
//   { path: 'about', component: AboutComponent },
//   { path: 'my-items', component: MyItemsComponent },
//   { path: 'repairs', component: RepairsComponent },
//   { path: 'volunteers', component: VolunteersComponent },
  { path: 'login', component: LoginComponent },
];
