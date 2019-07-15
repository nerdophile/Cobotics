// tslint:disable:indent
import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
	public paper: any = [];

	constructor() {
	}

	ngOnInit() {
		this.paper = [
			{
				heading: 'Domain driven approach for coherent rule mining.',
				details: 'In Advances in Computing,  Communications and Informatics',
				link: '',
			},
			{
				heading: 'Hyper local listing algorithm for user vicinity based points of interest.',
				details: 'In Recent Trends in Information Technology (ICRTIT), 2016 International Conference on,pp. 1 - 5. IEEE, 2016.',
				link: '',
			}
		];
	}

}
