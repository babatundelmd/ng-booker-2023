import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LendComponent } from './lend.component';

describe('LendComponent', () => {
  let component: LendComponent;
  let fixture: ComponentFixture<LendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
