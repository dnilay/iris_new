import { TodoFormComponent } from './todo-form.component';
import {FormBuilder} from '@angular/forms';

describe('TodoFormComponent', () => {
  // tslint:disable-next-line:prefer-const
  let component: TodoFormComponent;

  beforeEach(() => {
    component = new TodoFormComponent(new FormBuilder());

  });

  it('must have two controls', () => {
    expect(component.form.contains('name')).toBeTruthy();
    expect(component.form.contains('email')).toBeTruthy();
  });

  it('name field must be required some value', () => {
    const control = component.form.get('name');
    control.setValue('Nitin');
    expect(control.valid).toBeTruthy();
  });
});
