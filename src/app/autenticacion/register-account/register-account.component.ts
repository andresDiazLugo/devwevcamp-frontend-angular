import { Component } from '@angular/core';
import { InputComponent } from "../../input/input.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-register-account',
    standalone: true,
    templateUrl: './register-account.component.html',
    styleUrl: './register-account.component.scss',
    imports: [InputComponent,RouterLink]
})
export class RegisterAccountComponent {

}
