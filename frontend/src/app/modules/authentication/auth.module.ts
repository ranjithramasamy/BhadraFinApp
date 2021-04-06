import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AuthDefaultComponent } from './auth.default.component';
import { SignInComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import {AngularMaterialModule} from '../../angular.material.module';


@NgModule({
  declarations: [
    AuthDefaultComponent,
    SignInComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule,
    FlexLayoutModule
  ],
  exports: [
    AuthDefaultComponent,
    SignInComponent,
    RegisterComponent
  ]
})

export class AuthModule { }
