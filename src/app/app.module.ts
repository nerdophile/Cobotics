import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainNavbarComponent } from './components/shared/main-navbar/main-navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import {RouterModule} from '@angular/router';
import { MainFooterComponent } from './components/shared/main-footer/main-footer.component';
import { LegalComponent } from './components/legal/legal.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavbarComponent,
    HomeComponent,
    ServicesComponent,
    AboutComponent,
    ContactComponent,
    MainFooterComponent,
    LegalComponent
  ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		RouterModule
	],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
