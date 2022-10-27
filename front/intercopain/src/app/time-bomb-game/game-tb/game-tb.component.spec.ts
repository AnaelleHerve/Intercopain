import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameTbComponent } from './game-tb.component';

describe('GameTbComponent', () => {
  let component: GameTbComponent;
  let fixture: ComponentFixture<GameTbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameTbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameTbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
