// tslint:disable:indent

import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';



@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

	constructor(private formBuilder: FormBuilder, private af: AngularFireDatabase) {
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
		const {firstname, lastname, subject, email, message} = this.contactUsForm.value;
		const name = `${firstname} ${lastname}`;
		const date = Date();
		const html = `
		  <div>From: ${firstname} ${lastname}</div>
		  <div>Email: <a href="mailto:${email}">${email}</a></div>
		  <div>Date: ${date}</div>
		  <div>Subject: ${subject}</div>
		  <div>Message: ${message}</div>
		`;
		this.af.list('/messages').push({name, email, message, subject, date, html});
		this.contactUsForm.reset();
	}
}
