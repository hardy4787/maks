import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseItemComponent } from './course-item.component';
import { MaterialModule } from "../../material/material.module";
import { DurationPipe } from "../../shared/pipes/duration/duration.pipe";

describe('CourseComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;
  const courseMock = {
    id: 1,
    title: 'VIDEO COURSE 1',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus
                  beatae, incidunt ipsa iusto, maxime modi mollitia nulla, obcaecati repellendus
                  rerum suscipit ullam. Aliquid autem commodi dignissimos, ea eius eligendi minima
                  obcaecati optio tempore velit. Ad aut, doloribus dolorum ducimus hic modi nesciunt
                  perspiciatis quae quis, sit sunt tempore voluptatibus.`,
    duration: 190,
    creationDate: new Date("2022-05-20"),
    topRated: true,
  }
  let pipeSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MaterialModule,
      ],
      declarations: [ CourseItemComponent, DurationPipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
    component.item = courseMock;
    fixture.detectChanges();
    pipeSpy = spyOn(DurationPipe.prototype, 'transform');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be the correct binding', () => {
    const courseElement = fixture.nativeElement;
    const titleElement = courseElement.querySelector('.course-item-card__title');
    const descriptionElement = courseElement.querySelector('.course-item-card__main');

    expect(titleElement.textContent).toEqual(component.item.title);
    expect(descriptionElement.textContent.trim()).toEqual(component.item.description);
  });

  it('should emit event onCourseDelete', () => {
    const courseElement = fixture.nativeElement;
    const deleteElement = courseElement.querySelector('.btn__delete');
    spyOn(component.courseDeleted, 'emit');

    deleteElement.dispatchEvent(new Event('click'));

    fixture.detectChanges();

    expect(component.courseDeleted.emit).toHaveBeenCalled();
  });
});
