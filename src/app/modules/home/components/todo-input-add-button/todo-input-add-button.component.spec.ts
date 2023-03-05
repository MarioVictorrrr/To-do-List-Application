import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoInputAddButtonComponent } from './todo-input-add-button.component';

describe('TodoInputAddButtonComponent', () => {
  let component: TodoInputAddButtonComponent;
  let fixture: ComponentFixture<TodoInputAddButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoInputAddButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoInputAddButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
