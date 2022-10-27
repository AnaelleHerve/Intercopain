import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndPageTbComponent } from './end-page-tb.component';

describe('EndPageTbComponent', () => {
  let component: EndPageTbComponent;
  let fixture: ComponentFixture<EndPageTbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndPageTbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndPageTbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
