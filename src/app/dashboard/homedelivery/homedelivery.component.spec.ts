import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomedeliveryComponent } from './homedelivery.component';

describe('HomedeliveryComponent', () => {
  let component: HomedeliveryComponent;
  let fixture: ComponentFixture<HomedeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomedeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomedeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
