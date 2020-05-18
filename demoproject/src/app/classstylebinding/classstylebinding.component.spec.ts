import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassstylebindingComponent } from './classstylebinding.component';

describe('ClassstylebindingComponent', () => {
  let component: ClassstylebindingComponent;
  let fixture: ComponentFixture<ClassstylebindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassstylebindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassstylebindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
