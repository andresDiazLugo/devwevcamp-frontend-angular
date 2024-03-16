import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() title:string ="label";
  @Input() inputType: string = "text";
  @Input() namePlaceHolder: string = "colocar un texto";
  @Input() formvalue = '';
  @Output() inputsChanges = new EventEmitter<string>();
  @Output() confirTouch = new EventEmitter<boolean>();
  value: string = '';
  constructor(){
  }
  onNombreChange() {
    this.inputsChanges.emit(this.value);
  }
  OnInputBlur(){
    console.log("me ejecuto en el input")
    this.confirTouch.emit(true);
  }
   
}
