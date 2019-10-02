// tslint:disable:indent

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {ServicesComponent} from './components/services/services.component';
import {ContactComponent} from './components/contact/contact.component';
import {LegalComponent} from './components/legal/legal.component';
import {CookiePolicyComponent} from './components/cookie-policy/cookie-policy.component';
import {ProductsComponent} from './components/products/products.component';


const appRoutes: Routes = [
	{path: '', redirectTo: 'home', pathMatch: 'full'},
	{path: 'home', component: HomeComponent}, // cobotics-ai/home
	{path: 'aboutUs', component: AboutComponent}, // cobotics-ai/aboutUs
	{path: 'contact', component: ContactComponent}, // cobotics-ai/contact
	{path: 'services', component: ServicesComponent}, // cobotics-ai/services
	{path: 'legal', component: LegalComponent}, // cobotics-ai/legal
	{path: 'cookie', component: CookiePolicyComponent}, // cobotics-ai/cookies
	{path: 'products', component: ProductsComponent}, // cobotics-ai/products
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes, {
			scrollPositionRestoration: 'enabled'
		}
	)],
	exports: [RouterModule]
})

export class AppRoutingModule {
}

