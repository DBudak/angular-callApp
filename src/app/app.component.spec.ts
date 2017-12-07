import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactsComponent } from './contacts/contacts.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let fixture;
  let component;
  let template;
  //Async beforeEach runs after external tempalte is bundled
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ContactsComponent,
        AddContactComponent
      ],
    }).compileComponents();
    
  }));
  //Sync beforeEach runs after async beforeEach
  beforeEach(()=>{
    fixture  = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    template = fixture.debugElement.nativeElement;
  });
  //Component Tests
  it('should create the component', async(() => { 
    expect(component).toBeTruthy();
  }));
  it(`should have as title 'Call App'`, async(() => {
    expect(component.title).toEqual('Call App');
  }));
  //Template Tests
  it('should have contactsapp component in template', async(() => {
    fixture.detectChanges();
    const contactsEl = template.querySelector('app-contacts');
    expect(contactsEl).toBeTruthy();
  }));
  xit('should have history component', async(()=>{
    const historyEl = template.querySelector('app-history');
    expect(historyEl).toBeTruthy();
  }));
  it('should not have title until manual detectChanges() call', async(()=>{
    expect(template.querySelector('h1').textContent).not.toContain('Call App');
  }));
  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    expect(template.querySelector('h1').textContent).toContain('Call App');
  }));
  
});
