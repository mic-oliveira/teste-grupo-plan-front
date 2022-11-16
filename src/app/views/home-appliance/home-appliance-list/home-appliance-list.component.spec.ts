import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeApplianceListComponent } from './home-appliance-list.component';

describe('HomeApplianceListComponent', () => {
  let component: HomeApplianceListComponent;
  let fixture: ComponentFixture<HomeApplianceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeApplianceListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeApplianceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
