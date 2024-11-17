import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-b-switch',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './b-switch.component.html',
  styleUrl: './b-switch.component.css'
})
export class BSwitchComponent {
   @Input() styleMainColor: string = '#fff';

   @Input() styleSecondaryColor: string = '#04c51a';

   @Input() switchValue= false;

   @Output() switchChange = new EventEmitter()

  onChangeHandler(event: Event) {
    const target = event.target as HTMLInputElement;
    console.log(target.checked)
    this.switchChange.emit(!!target.checked)
  }

   get styleSettingsLabel() {
     return   `background: ${this.styleSecondaryColor};`
   }
  get styleSettingsDiv() {
    return   `background: ${this.styleMainColor};`
  }
}
