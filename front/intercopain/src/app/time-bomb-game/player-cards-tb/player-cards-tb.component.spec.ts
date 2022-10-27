import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerCardsTbComponent } from './player-cards-tb.component';

describe('PlayerCardsTbComponent', () => {
  let component: PlayerCardsTbComponent;
  let fixture: ComponentFixture<PlayerCardsTbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerCardsTbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerCardsTbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
