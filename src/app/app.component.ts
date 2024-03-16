import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./autenticacion/login/login.component";
import { RegisterAccountComponent } from "./autenticacion/register-account/register-account.component";
import { InputComponent } from './input/input.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, LoginComponent, RegisterAccountComponent,InputComponent]
})
export class AppComponent {
  title = 'dev-web-camp-frontend';
}
