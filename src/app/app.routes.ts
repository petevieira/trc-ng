import { Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
// import { AboutComponent } from 'app/screens/about/about.component';
// import { MyItemsComponent } from './components/my-items.component';
// import { RepairsComponent } from 'app/screens/repairs/repairs.component';
// import { VolunteersComponent } from 'app/screens/volunteers/volunteers.component';
import { LoginComponent } from 'app/screens/login/login.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, data: { title: 'Home' } },
    { path: 'login', component: LoginComponent, data: { title: 'Login' } },
    //   { path: 'about', component: AboutComponent },
    //   { path: 'my-items', component: MyItemsComponent },
    //   { path: 'repairs', component: RepairsComponent },
    //   { path: 'volunteers', component: VolunteersComponent },
];
