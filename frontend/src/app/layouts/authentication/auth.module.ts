import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppMaterialModule } from '../../app.material.module';
import { AuthRoutingModule } from './auth.routing.module';

import { AuthComponent } from './auth.component';
import { SignInComponent } from '../../features/authentication/pages/signin/signin.component';
import { RegisterComponent } from '../../features/authentication/pages/register/register.component';

@NgModule({
  declarations: [
    AuthComponent,
    SignInComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppMaterialModule,
    FlexLayoutModule,
    AuthRoutingModule
  ],
  exports: []
})

export class AuthModule { }
