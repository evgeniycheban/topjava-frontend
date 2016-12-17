import { Routes } from '@angular/router';
import { LoginComponent } from './login';
import { MealListComponent } from './meal-list/meal-list.component';
import { AuthenticationGuardService } from './shared/auth/auth-guard.service';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'meals', component: MealListComponent, canActivate: [AuthenticationGuardService]}
];
