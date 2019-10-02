import {Component, OnInit} from '@angular/core';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

	public width = 1000;
	public height = 5000;
	public occupation = false;
	public logistics = true;
	public sourcing = false;

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

	onClickLogistics() {
		this.occupation = false;
		this.logistics = true;
		this.sourcing = false;

	}

	onClickOccupational() {
		this.logistics = false;
		this.occupation = true;
		this.sourcing = false;

	}

	onClickSourcing() {
		this.logistics = false;
		this.occupation = false;
		this.sourcing = true;

	}
}
