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
import {NgcCookieConsentModule, NgcCookieConsentConfig} from 'ngx-cookieconsent';
import { CookiePolicyComponent } from './components/cookie-policy/cookie-policy.component';


const cookieConfig: NgcCookieConsentConfig = {
	cookie: {
		domain: 'localhost' // or 'your.domain.com' // it is mandatory to set a domain, for cookies to work properly (see https://goo.gl/S2Hy2A)
	},
	palette: {
		popup: {
			background: '#000'
		},
		button: {
			background: '#f1d600'
		}
	},
	theme: 'edgeless',
	type: 'info',
	layout: 'my-custom-layout',
	layouts: {
		'my-custom-layout': '{{messagelink}}{{compliance}}'
	},
	elements: {
		messagelink: `
    <span id="cookieconsent:desc" class="cc-message">{{message}}
      <a  aria-label="learn more about cookies" tabindex="0" class="cc-link" href="/cookie"
      target="_blank">{{cookiePolicyLink}}</a>
    </span>
    `,
	},
	content: {
		message: 'By using our site, you acknowledge that you have read and understand our ',

		cookiePolicyLink: 'Cookie Policy'
	}
};

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
		CookiePolicyComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		RouterModule,
		NgxPageScrollModule,
		FormsModule,
		ReactiveFormsModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireDatabaseModule,
		NgcCookieConsentModule.forRoot(cookieConfig)

	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
