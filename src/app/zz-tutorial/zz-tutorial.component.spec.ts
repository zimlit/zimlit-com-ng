import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZzTutorialComponent } from './zz-tutorial.component';

describe('ZzTutorialComponent', () => {
  let component: ZzTutorialComponent;
  let fixture: ComponentFixture<ZzTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZzTutorialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZzTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
