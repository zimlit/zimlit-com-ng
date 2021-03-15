import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZzTutorialBeginnerComponent } from './zz-tutorial-beginner.component';

describe('ZzTutorialBeginnerComponent', () => {
  let component: ZzTutorialBeginnerComponent;
  let fixture: ComponentFixture<ZzTutorialBeginnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZzTutorialBeginnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZzTutorialBeginnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
