import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() title:string ="label";
  @Input() inputType: string = "text";
  @Input() namePlaceHolder: string = "colocar un texto";

  constructor(){
  }
}
