import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HpLandlordComponent } from './hp-landlord.component';

describe('HpLandlordComponent', () => {
  let component: HpLandlordComponent;
  let fixture: ComponentFixture<HpLandlordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HpLandlordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HpLandlordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
