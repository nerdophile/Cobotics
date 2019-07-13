// tslint:disable:indent

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {ServicesComponent} from './components/services/services.component';
import {ContactComponent} from './components/contact/contact.component';


const appRoutes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent }, // cobotics-ai/home
  	{ path: 'aboutUs', component: AboutComponent }, // cobotics-ai/home
	{ path: 'contact', component:  ContactComponent}, // cobotics-ai/home
	{ path: 'services', component: ServicesComponent } // cobotics-ai/home
];
@NgModule({
 imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})

export class AppRoutingModule { }

