import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCreateNewComponent } from './button-create-new.component';

describe('ButtonCreateNewComponent', () => {
  let component: ButtonCreateNewComponent;
  let fixture: ComponentFixture<ButtonCreateNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonCreateNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonCreateNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
