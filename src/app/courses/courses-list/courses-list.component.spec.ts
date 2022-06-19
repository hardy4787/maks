import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListComponent } from './courses-list.component';
import { FilterPipe } from "../../shared/pipes/filter/filter.pipe";
import { OrderByPipe } from "../../shared/pipes/orderBy/order-by.pipe";

describe('CoursesComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CoursesListComponent,
        FilterPipe,
        OrderByPipe,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('courseEdit method should return string', () => {
    expect(component.courseEdited.emit).toHaveBeenCalled();
  });

  it('courseDelete method should  return string', () => {
    expect(component.courseDeleted.emit).toHaveBeenCalled();
  });
});
