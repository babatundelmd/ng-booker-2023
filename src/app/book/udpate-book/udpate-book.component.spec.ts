import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdpateBookComponent } from './udpate-book.component';

describe('UdpateBookComponent', () => {
  let component: UdpateBookComponent;
  let fixture: ComponentFixture<UdpateBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ UdpateBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UdpateBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
