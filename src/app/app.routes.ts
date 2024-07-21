import { Routes } from '@angular/router';
import { LoginSignupComponent } from './components/login-signup/login-signup.component';
import { LayoutComponent } from './components/layout/layout.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginSignupComponent },
    {
        path: '', canActivate: [authGuard], component: LayoutComponent, children: [
            { path: 'dashboard', loadComponent: () => import('./components/dashboard/dashboard.component').then(c => c.DashboardComponent) },
            { path: 'manage-drives', loadComponent: () => import('./components/manage-drives/manage-drives.component').then(c => c.ManageDrivesComponent) },
            { path: 'create-drive', loadComponent: () => import('./components/create-drive/create-drive.component').then(c => c.CreateDriveComponent) }
        ]
    }

];
