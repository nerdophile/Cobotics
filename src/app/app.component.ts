// tslint:disable:indent
import {Component, OnInit, OnDestroy} from '@angular/core';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

	// keep refs to subscriptions to be able to unsubscribe later

	constructor() {
	}

	ngOnInit() {

		// // subscribe to cookieconsent observables to react to main events
		// this.popupOpenSubscription = this.ccService.popupOpen$.subscribe(
		// 	() => {
		// 		// you can use this.ccService.getConfig() to do stuff...
		// 	});
		//
		// this.popupCloseSubscription = this.ccService.popupClose$.subscribe(
		// 	() => {
		// 		// you can use this.ccService.getConfig() to do stuff...
		// 	});
		//
		// this.initializeSubscription = this.ccService.initialize$.subscribe(
		// 	(event: NgcInitializeEvent) => {
		// 		// you can use this.ccService.getConfig() to do stuff...
		// 	});
		//
		// this.statusChangeSubscription = this.ccService.statusChange$.subscribe(
		// 	(event: NgcStatusChangeEvent) => {
		// 		// you can use this.ccService.getConfig() to do stuff...
		// 	});
		//
		// this.revokeChoiceSubscription = this.ccService.revokeChoice$.subscribe(
		// 	() => {
		// 		// you can use this.ccService.getConfig() to do stuff...
		// 	});
		//
		// this.noCookieLawSubscription = this.ccService.noCookieLaw$.subscribe(
		// 	(event: NgcNoCookieLawEvent) => {
		// 		// you can use this.ccService.getConfig() to do stuff...
		// 	});
	}

	ngOnDestroy() {
		// unsubscribe to cookieconsent observables to prevent memory leaks
		// this.popupOpenSubscription.unsubscribe();
		// this.popupCloseSubscription.unsubscribe();
		// this.initializeSubscription.unsubscribe();
		// this.statusChangeSubscription.unsubscribe();
		// this.revokeChoiceSubscription.unsubscribe();
		// this.noCookieLawSubscription.unsubscribe();
	}
}
