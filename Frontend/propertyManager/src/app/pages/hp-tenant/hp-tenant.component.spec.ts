import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HpTenantComponent } from './hp-tenant.component';

describe('HpTenantComponent', () => {
  let component: HpTenantComponent;
  let fixture: ComponentFixture<HpTenantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HpTenantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HpTenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
