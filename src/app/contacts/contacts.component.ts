import { Component, OnInit } from '@angular/core';
import { ContactsService } from './contacts.service'; 
import { Contact } from './contact.model';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ ContactsService ]
})
export class ContactsComponent implements OnInit {
  contacts: Contact[];

  constructor(
    private ContactsService:  ContactsService   
  ) { }

  
  ngOnInit() {
    this.getContacts();
  }

  getContacts(){
    this.ContactsService.getContacts().subscribe(
      contacts => this.contacts = contacts
    )
  }
}
