// tslint:disable:indent

import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

	constructor(private formBuilder: FormBuilder) {
	}

	contactUsForm = this.formBuilder.group({
		firstname: ['', [Validators.required]],
		lastname: ['', [Validators.required]],
		subject: ['', [Validators.required]],
		message: ['', [Validators.required]],
		email: ['', [Validators.required, Validators.email]],

	});

	ngOnInit() {
	}

	onSubmitForm() {
		console.log(this.contactUsForm.value);
	}
}
