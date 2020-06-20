import { Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Contact} from '../common/contact';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
contacts: Contact[] = [

  new Contact(1, 'email'),

  new Contact(2, 'cell phone'),
  new Contact(3, 'Pager')
];

  submit(f: NgForm) {

  }
}
