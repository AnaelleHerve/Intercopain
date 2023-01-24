import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinPartyDialogComponent } from './join-party-dialog.component';

describe('JoinPartyDialogComponent', () => {
  let component: JoinPartyDialogComponent;
  let fixture: ComponentFixture<JoinPartyDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinPartyDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinPartyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
