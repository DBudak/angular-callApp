import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../shared/contact.model';
import { ContactsService } from '../shared/contacts.service';


@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css'],
  providers: [ ContactsService ]
})
export class AddContactComponent implements OnInit {

  newContact:Contact;
  @Input('contacts') existingContacts: Contact[];
  constructor(
    private ContactsService: ContactsService
  ) { }

  ngOnInit() {
  }

  addContact(name:string,number:string):void {
    this.newContact = {
      name: name,
      phoneNumber:number
    }
    this.ContactsService.addContact(this.newContact);
  }
}
