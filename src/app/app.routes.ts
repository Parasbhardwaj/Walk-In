import { Routes } from '@angular/router';
import { ManageDrivesComponent } from './components/manage-drives/manage-drives.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginSignupComponent } from './components/login-signup/login-signup.component';
import { LayoutComponent } from './components/layout/layout.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginSignupComponent },
    {
        path: '', component: LayoutComponent, children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'manage-drives', component: ManageDrivesComponent }
        ]
    }

];
