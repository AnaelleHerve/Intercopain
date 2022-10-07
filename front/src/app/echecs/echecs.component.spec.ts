import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchecsComponent } from './echecs.component';

describe('EchecsComponent', () => {
  let component: EchecsComponent;
  let fixture: ComponentFixture<EchecsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EchecsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EchecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
