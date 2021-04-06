/* Angular Material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

/* Angular Flex Layout */
import { FlexLayoutModule } from '@angular/flex-layout';

/* FormsModule */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Angular Material Module */
import { AngularMaterialModule } from './angular.material.module';

/* Routing */
import { AppRoutingModule } from './app.routing.module';

/* App Components */
import { AppComponent } from './app.component';
import { CommonAuthService } from './core/services/common.auth.service';
import { HomeComponent } from './modules/home/home.component';
import {AuthModule} from './modules/authentication/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [CommonAuthService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
