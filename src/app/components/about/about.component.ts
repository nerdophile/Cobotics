// tslint:disable:indent
import {Component, OnInit} from '@angular/core';
import {log} from 'util';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
	private selectedPdf: any;

	constructor() {
	}

	public paper: any[] = [
		{
			id: 0,
			heading: 'Domain driven approach for coherent rule mining.',
			details: `In Advances in Computing,  Communications and Informatics
			(ICACCI), 2013 International Conference on, pp. 109 - 114. IEEE, 2013. `,
			link: 'http://www.africau.edu/images/default/sample.pdf',
		},
		{
			id: 1,
			heading: 'Hyper local listing algorithm for user vicinity based points of interest.',
			details: 'In Recent Trends in Information Technology (ICRTIT), 2016 International Conference on,pp. 1 - 5. IEEE, 2016.',
			link: 'http://www.africau.edu/images/default/sample.pdf',
		},
		{
			id: 2,
			heading: 'DUMMY',
			details: 'In Recent Trends in Information Technology (ICRTIT), 2016 International Conference on,pp. 1 - 5. IEEE, 2016.',
			link: 'http://www.africau.edu/images/default/sample.pdf',
		}
	];

	ngOnInit() {
		this.selectedPdf = this.paper[0];
		console.log(this.selectedPdf.id);
	}

	incrementPdf() {
		if (this.selectedPdf.id < this.paper.length - 1) {
			this.selectedPdf = this.paper [this.selectedPdf.id + 1];
		}
	}

	decrementPdf() {
		if (this.selectedPdf.id > 0) {
			this.selectedPdf = this.paper [this.selectedPdf.id - 1];
		}
	}
}
