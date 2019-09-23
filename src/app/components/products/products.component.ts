import {Component, OnInit} from '@angular/core';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

	// @ts-ignore


	public width = 1000;
	public height = 5000;


	constructor(private deviceService: DeviceDetectorService) {
	}

	ngOnInit() {
		if (this.deviceService.isMobile()) {
			this.width = 350;
			this.height = 200;
		} else {
			this.width = 1000;
			this.height = 500;
		}
	}


}
