import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './modules/authentication/signin/signin.component';
import { RegisterComponent } from './modules/authentication/register/register.component';
import { HomeComponent } from './modules/home/home.component';
import { PageNotFoundComponent } from './shared/components/pagenotfound/pagenotfound.component';
import { AuthDefaultComponent } from './modules/authentication/auth.default.component';
import { AuthModule } from './modules/authentication/auth.module';

const routes: Routes = [
  {
    path: '',
    component: AuthDefaultComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'signin'
      },
      {
        path: 'signin',
        component: SignInComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }]
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AuthModule],
  exports: [RouterModule]
})

export class AppRoutingModule { }
