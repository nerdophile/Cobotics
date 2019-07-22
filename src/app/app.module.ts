// tslint:disable:indent

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MainNavbarComponent} from './components/shared/main-navbar/main-navbar.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './components/home/home.component';
import {ServicesComponent} from './components/services/services.component';
import {AboutComponent} from './components/about/about.component';
import {ContactComponent} from './components/contact/contact.component';
import {RouterModule} from '@angular/router';
import {MainFooterComponent} from './components/shared/main-footer/main-footer.component';
import {LegalComponent} from './components/legal/legal.component';
import {NgxPageScrollModule} from 'ngx-page-scroll';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {environment} from 'src/environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {CookiePolicyComponent} from './components/cookie-policy/cookie-policy.component';
import {
	BrowserAnimationsModule
} from '@angular/platform-browser/animations';
import {CookieLawModule} from 'angular2-cookie-law';


@NgModule({
	declarations: [
		AppComponent,
		MainNavbarComponent,
		HomeComponent,
		ServicesComponent,
		AboutComponent,
		ContactComponent,
		MainFooterComponent,
		LegalComponent,
		CookiePolicyComponent,

	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		RouterModule,
		NgxPageScrollModule,
		FormsModule,
		ReactiveFormsModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireDatabaseModule,
		CookieLawModule // import Angular's CookieLaw modules


	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
