import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscFeeDefaultersComponent } from './misc-fee-defaulters.component';

describe('MiscFeeDefaultersComponent', () => {
  let component: MiscFeeDefaultersComponent;
  let fixture: ComponentFixture<MiscFeeDefaultersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiscFeeDefaultersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscFeeDefaultersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
