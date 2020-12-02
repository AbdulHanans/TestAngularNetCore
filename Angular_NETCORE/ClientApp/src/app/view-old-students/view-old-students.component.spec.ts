import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOldStudentsComponent } from './view-old-students.component';

describe('ViewOldStudentsComponent', () => {
  let component: ViewOldStudentsComponent;
  let fixture: ComponentFixture<ViewOldStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewOldStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOldStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
