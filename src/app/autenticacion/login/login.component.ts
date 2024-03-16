import { Component } from '@angular/core';
import { InputComponent } from "../../input/input.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    imports: [InputComponent,RouterLink]
})
export class LoginComponent {
    // count:number = 0;
    // onButtonClick(){
    //     this.count += 1;
    // }
}
