import {Component, OnInit} from '@angular/core';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {





	constructor(private deviceService: DeviceDetectorService) {
	}

	ngOnInit() {
		if (this.deviceService.isMobile()) {
			this.width = 350;
			this.height = 200;
		} else {
			this.width = 1000;
			this.height = 500;
			// tslint:disable-next-line:indent
		}
	}




}
