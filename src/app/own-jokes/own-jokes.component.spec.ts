import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnJokesComponent } from './own-jokes.component';

describe('OwnJokesComponent', () => {
  let component: OwnJokesComponent;
  let fixture: ComponentFixture<OwnJokesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OwnJokesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnJokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
