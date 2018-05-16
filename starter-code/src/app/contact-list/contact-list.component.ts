import { Component, OnInit } from '@angular/core';
import contactList from '../contacts';
import { SingleContactComponent } from '../single-contact/single-contact.component'


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Array<any>;
  newContact = {
    name: '',
    email: '',
    phoneNumber: '',
    image: '',
  };

  constructor() { }

  ngOnInit() {
    this.contacts = contactList;
  }

  deleteTheContact(entireContact){
    const index = this.contacts.indexOf(entireContact);
    this.contacts.splice(index, 1);
  }


  addContact() {
    console.log("Add contact has been called");
    const createContact = {
      name: this.newContact.name,
      email: this.newContact.email,
      phoneNumber: this.newContact.phoneNumber,
      image: this.newContact.image,
    }
    this.contacts.push(createContact);
  }
}
