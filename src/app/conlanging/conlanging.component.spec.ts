import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConlangingComponent } from './conlanging.component';

describe('ConlangingComponent', () => {
  let component: ConlangingComponent;
  let fixture: ComponentFixture<ConlangingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConlangingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConlangingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
