import { Injectable } from '@angular/core';
import { Contact } from './contact.model';
import { CONTACTS } from './contacts.mock';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContactsService {

  constructor() { }

  getContacts():Observable<Contact[]> {
    return of(CONTACTS);
  }

  addContact(newContact:Contact):void{
    CONTACTS.push(newContact);
  }
}
