import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotsCroisesComponent } from './mots-croises.component';

describe('MotsCroisesComponent', () => {
  let component: MotsCroisesComponent;
  let fixture: ComponentFixture<MotsCroisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotsCroisesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotsCroisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
