import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DamesComponent } from './dames.component';

describe('DamesComponent', () => {
  let component: DamesComponent;
  let fixture: ComponentFixture<DamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
