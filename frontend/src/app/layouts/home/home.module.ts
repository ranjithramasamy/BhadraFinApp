import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AppMaterialModule} from '../../app.material.module';
import {HomeRoutingModule} from './home.routing.module';

import {HomeComponent} from './home.component';
import {DashboardComponent} from '../../features/home/pages/dashboard/dashboard.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule {
}
