// tslint:disable:indent
// tslint:disable:max-line-length

import {Component, OnInit} from '@angular/core';
import {
	animate, state, style, transition, trigger
} from '@angular/animations';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.css'],
	// animations: [
	// 	trigger('slide', [
	// 		state('left', style({transform: 'translateX(4%)'})),
	// 		state('right', style({transform: 'translateX(-0%)'})),
	// 		transition('* => *' , animate(300))
	// 	])]
})
export class AboutComponent implements OnInit {
	public selectedPdf: any;
	public activePane = 'right';

	constructor() {
	}

	decrementUrl = '../../../assets/images/left.svg';
	public paper: any[] = [
		{
			id: 0,
			heading: `Domain Driven Multi-Feature
					Combined Mining for retail dataset`,
			details: `International Journal of Engineering and Advanced Technology (IJEAT)`,

			link: `https://res.cloudinary.com/ducctr5hn/image/upload/v1564000543/pdf/Domain_Driven_Multi-Feature_Combined_Mining__journal_format_r70pdn.pdf`,
		},
		{
			id: 1,
			heading: 'Hyper local listing algorithm for user vicinity based points of interest.',
			details: 'Fifth International Conference on Recent Trends in Information Technology',
			link: `https://res.cloudinary.com/ducctr5hn/image/upload/v1564000544/pdf/Shashank___sep_2016_-Hyper_Local_Listing_Algorithm_For_User_Vicinity_Based_Points_Of_Interest_acnuly.pdf`,
		},
		{
			id: 2,
			heading: 'Domain Driven Density Based Clustering Algorithm',
			details: `International Conference on ICT for Sustainable Development (ICT4SD)`,
			link: 'https://res.cloudinary.com/ducctr5hn/image/upload/v1564000543/pdf/Carmelita_2017_w77k9r.pdf',
		},
		// {
		// 	id: 2,
		// 	heading: 'Domain Driven Approach for Coherent Rule Mining',
		// 	details: `International Conference on Advances in Computing, Communications and Informatics (ICACCI-2013) (ICACCI2013)`,
		// 	link: 'http://www.africau.edu/images/default/sample.pdf',
		// },
		{
			id: 3,
			heading: 'Serial Multimethod Combined Mining',
			details: `International Conference on Advances in Computing, Communications and Informatics (ICACCI-2014)`,
			link: 'https://res.cloudinary.com/ducctr5hn/image/upload/v1564000544/pdf/serial_multimethod_combined_mining___IEEE_format_dpzdqf.pdf',
		},
		// {
		// 	id: 4,
		// 	heading: 'An Efficient and Interactive Approach for Association Rules Generation by Integrating Ontology and Filtering Technique',
		// 	details: `Proceedings of International Conference on ICT for Sustainable Development`,
		// 	link: 'http://www.africau.edu/images/default/sample.pdf',
		// },
		{
			id: 4,
			heading: 'A Novel Pattern Merger Algorithm for generating Actionable Rules for Multi-Source Combined Mining',
			details: `International Journal of Computer Applications (IJCA)`,
			link: 'https://res.cloudinary.com/ducctr5hn/image/upload/v1564000543/pdf/A_Novel_Pattern_Merger_Algorithm_for_generating_Actionable_Rules_for_Multi-Source_Combined_Mining-2015-ijca-906108_e6zlvb.pdf',
		},
		// {
		// 	id: 6,
		// 	heading: 'Web Service Discovery based on Syntactic and Semantic Similarity',
		// 	details: `International Conference on Internet of Things and Applications (IOTA 2016)`,
		// 	link: 'http://www.africau.edu/images/default/sample.pdf',
		// },
		{
			id: 5,
			heading: 'Psychology assisted prediction of students performance using machine learning algorithms',
			details: `2016 IEEE International Conference on Recent Trends in Electronics, Information & Communication Technology (RTEICT-2016)`,
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
			this.activePane = 'left';
			this.decrementUrl = '../../../assets/images/left-inactive.svg';

		}
		if (this.selectedPdf.id === 0) {
			this.decrementUrl = '../../../assets/images/left.svg';

		}
	}

	decrementPdf() {
		if (this.selectedPdf.id > 0) {
			this.selectedPdf = this.paper [this.selectedPdf.id - 1];
			this.activePane = 'left';
			this.activePane = 'right';
			this.decrementUrl = '../../../assets/images/left-inactive.svg';

		}
		if (this.selectedPdf.id === 0) {
			this.decrementUrl = '../../../assets/images/left.svg';

		}
	}
}
