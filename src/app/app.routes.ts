import { Routes } from '@angular/router';
import { ManageDrivesComponent } from './components/manage-drives/manage-drives.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'manage-drives', component: ManageDrivesComponent }
];
