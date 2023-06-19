import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  istouched = false;
  selectedOption: string = '';

  validateSelection() {
    this.istouched = true;
  }

  @Input() control: FormControl;
  @Input() label: string='';

  constructor() {
    this.control = new FormControl('', Validators.required);
  }
}
