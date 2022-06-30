import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerFooterComponent } from './container-footer.component';

describe('ContainerFooterComponent', () => {
  let component: ContainerFooterComponent;
  let fixture: ComponentFixture<ContainerFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
