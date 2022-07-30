import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutLessonsComponent } from './layout-lessons.component';

describe('LayoutLessonsComponent', () => {
  let component: LayoutLessonsComponent;
  let fixture: ComponentFixture<LayoutLessonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutLessonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
