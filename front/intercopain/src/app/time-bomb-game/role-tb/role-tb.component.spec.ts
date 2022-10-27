import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleTbComponent } from './role-tb.component';

describe('RoleTbComponent', () => {
  let component: RoleTbComponent;
  let fixture: ComponentFixture<RoleTbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoleTbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoleTbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
