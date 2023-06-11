import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouserulesComponent } from './houserules.component';

describe('HouserulesComponent', () => {
  let component: HouserulesComponent;
  let fixture: ComponentFixture<HouserulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouserulesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouserulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
