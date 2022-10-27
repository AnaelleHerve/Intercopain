import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageTbComponent } from './home-page-tb.component';

describe('HomePageTbComponent', () => {
  let component: HomePageTbComponent;
  let fixture: ComponentFixture<HomePageTbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageTbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageTbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
