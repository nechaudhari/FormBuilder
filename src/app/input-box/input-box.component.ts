import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.css']
})
export class InputBoxComponent {
  isTouched = false;
  inputValue: string = '';

  validateInput() {
    this.isTouched = true;
  }
  @Input() control: FormControl;
  @Input() label: string='';

  constructor() {
    this.control = new FormControl('', Validators.required);
  }
}
