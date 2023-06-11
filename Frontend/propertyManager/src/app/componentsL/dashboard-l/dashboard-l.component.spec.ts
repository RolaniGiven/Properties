import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardLComponent } from './dashboard-l.component';

describe('DashboardLComponent', () => {
  let component: DashboardLComponent;
  let fixture: ComponentFixture<DashboardLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
