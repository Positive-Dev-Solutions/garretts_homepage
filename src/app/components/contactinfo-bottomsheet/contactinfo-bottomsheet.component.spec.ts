import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactinfoBottomsheetComponent } from './contactinfo-bottomsheet.component';

describe('ContactinfoBottomsheetComponent', () => {
  let component: ContactinfoBottomsheetComponent;
  let fixture: ComponentFixture<ContactinfoBottomsheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactinfoBottomsheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactinfoBottomsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
