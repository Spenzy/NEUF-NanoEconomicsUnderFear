import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {Dass21sheetComponent} from './Pages/dass21sheet/dass21sheet.component';
import {AuthService} from './services/auth.service';
import {NotFoundComponent} from './Pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./Pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./Pages/auth/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./Pages/auth/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'dass21',
    component: Dass21sheetComponent,
    // canActivate: [AuthService]
  },
  {
    path: 'store',
    loadChildren: () => import('./Pages/store/store.module').then(m => m.StorePageModule),
    // canActivate: [AuthService]
  },
  {
    path: 'admin',
    loadChildren: () => import('./Pages/admin/admin.module').then(m => m.AdminPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./Pages/profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
