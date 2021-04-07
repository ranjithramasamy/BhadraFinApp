/* Angular Material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* Angular Material Module */
import { AppMaterialModule } from './app.material.module';

/* Routing */
import { AppRoutingModule } from './app.routing.module';

/* App feature modules */
import { AuthModule } from './layouts/authentication/auth.module';
import { HomeModule } from './layouts/home/home.module';

/* App Components */
import { AppComponent } from './app.component';
import { CommonAuthService } from './core/services/common.auth.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    AuthModule,
    HomeModule,
    AppRoutingModule
  ],
  providers: [CommonAuthService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
