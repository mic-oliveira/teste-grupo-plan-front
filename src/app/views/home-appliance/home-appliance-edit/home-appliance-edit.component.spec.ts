import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeApplianceEditComponent } from './home-appliance-edit.component';

describe('HomeApplianceEditComponent', () => {
  let component: HomeApplianceEditComponent;
  let fixture: ComponentFixture<HomeApplianceEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeApplianceEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeApplianceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
