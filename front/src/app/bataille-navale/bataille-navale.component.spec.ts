import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatailleNavaleComponent } from './bataille-navale.component';

describe('BatailleNavaleComponent', () => {
  let component: BatailleNavaleComponent;
  let fixture: ComponentFixture<BatailleNavaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatailleNavaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatailleNavaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
