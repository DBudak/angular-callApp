import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsComponent } from './contacts.component';
import { ContactsService } from './contacts.service';
import { Contact } from './contact.model';
import { Observable } from 'rxjs/Observable';

describe('ContactsComponent', () => {
  let component: ContactsComponent;
  let fixture: ComponentFixture<ContactsComponent>;
  let template;
  let spy;
  let contactsServiceMock: Contact[];
  let contactsService: ContactsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsComponent ],
      providers: [ ContactsService ]
    });

    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsComponent);
    component = fixture.componentInstance;
    template = fixture.debugElement.nativeElement;
    contactsService = fixture.debugElement.injector.get(ContactsService);
    contactsServiceMock = [
      { name: 'Me', phoneNumber: '212-768-0897'},
      { name: 'Mom', phoneNumber: '212-908-0989'},
      { name: 'Dad', phoneNumber: '212-212-2121'}      
    ];
    spy = spyOn(contactsService, 'getContacts')
      .and.returnValue(Observable.create(()=> contactsServiceMock));
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
  it('should have a list of contacts', () => {
    fixture.detectChanges();
    expect(template.querySelector('li')).toBeTruthy();
  })
  it('should have contacts in template', () => {
    fixture.detectChanges();
    expect(template.querySelector('li').textContent).toContain('Me');
  });  
});
