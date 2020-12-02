import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassWiseDefaultersComponent } from './class-wise-defaulters.component';

describe('ClassWiseDefaultersComponent', () => {
  let component: ClassWiseDefaultersComponent;
  let fixture: ComponentFixture<ClassWiseDefaultersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassWiseDefaultersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassWiseDefaultersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
