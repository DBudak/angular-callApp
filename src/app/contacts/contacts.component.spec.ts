import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsComponent } from './contacts.component';
import { ContactsService } from '../shared/contacts.service';
import { Contact } from '../shared/contact.model';
import { Observable } from 'rxjs/Observable';
import { AddContactComponent } from '../add-contact/add-contact.component';

describe('ContactsComponent', () => {
  let component: ContactsComponent;
  let fixture: ComponentFixture<ContactsComponent>;
  let template;
  let contactsService: ContactsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsComponent,
      AddContactComponent ],
      providers: [ ContactsService ]
    });

    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsComponent);
    component = fixture.componentInstance;
    template = fixture.debugElement.nativeElement;
    contactsService = fixture.debugElement.injector.get(ContactsService);

  });
  //Component Tests
  it('should create component', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
  it('initial contacts are empty', () => {
    expect(component.contacts).toBeUndefined();
  })
  it('should not have list before OnInit', () => {
    expect(template.querySelector('li')).toBeNull();
  })
  //Template Tests
  it('should have a list of contacts', async(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.contacts).toBeDefined();
      expect(template.querySelector('li')).toBeTruthy();
    })

  }));
  it('should have contacts in template', () => {
    fixture.detectChanges();
    expect(template.querySelector('li').textContent).toContain('Me');
  });  
});
