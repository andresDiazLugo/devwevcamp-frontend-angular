import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from "../../input/input.component";
import { RouterLink } from '@angular/router';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AutenticationService } from '../../services/autentication.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { IerrorValidationCamps, IresponseSuccess } from '../../types/user';

@Component({
    selector: 'app-register-account',
    standalone: true,
    templateUrl: './register-account.component.html',
    styleUrl: './register-account.component.scss',
    imports: [InputComponent,RouterLink,ReactiveFormsModule,CommonModule]
})
export class RegisterAccountComponent {
    myForm: FormGroup;
    nombre: string = '';
    response$: Observable<any> | undefined;
    errorsServer: Array<string> = [];
 
    constructor(private fb: FormBuilder, private authenticateService: AutenticationService, private router: Router){
        this.myForm = this.fb.group({
            name: ['',[Validators.required]],
            email: ['',[Validators.required, Validators.email]],
            phone: ['',[Validators.required]],
            password: ['',[Validators.required,Validators.minLength(6)]]
        });
    }

    captureValues(controlName: string,nombre:string){
        console.log("nombre",nombre)
        this.myForm.controls[controlName].setValue(nombre);
    }
    onSubmit(){
       
       if(this.myForm.valid){
        this.response$  = this.authenticateService.postData(this.myForm.value);
        this.response$.subscribe(
            (response: IresponseSuccess) =>{
                this.myForm.reset();
                this.router.navigate(['/login']);
            },
            (error: IerrorValidationCamps ) =>{
                this.getErrorsServer(error.error);
            }
        )
       }
    }
    reciveBoolean(refNameCamp:string,value:boolean){
        if (value) {
            this.myForm.get(refNameCamp)?.markAsTouched();
        }
    }
    getErrors(controlName: string) {
        const control = this.myForm.get(controlName);
        // console.log('este es el control',control)
        if (control && control.touched) {        
          return Object.keys(control.errors || {}).map((key) => {
            return this.getErrorMsg(control, key,controlName);
          });
        }
        return []
    }
    getErrorsServer(typeError: any){
        if(typeError.status === 422){
            for(const serverError of typeError.errors){
                const fieldName = serverError.field;
                const errorMessage = serverError.message;
                this.myForm.controls[fieldName].setErrors({'serverError':errorMessage});
            }
        }
        //aca deberiamos colocar una condicion si devuelve un status 400 o 500 diciendo que hay un error en el sistema
    }
    getErrorMsg(control: any, errorKey: string,controlName:string): string {
        const errorMessages: { [key: string]: string } = {
          required: `El campo ${controlName} es requerido`,
          email: 'Ingresa un correo electrónico válido.',
          minlength: 'Password un minimo de 6 caracteres',
          // Puedes agregar más mensajes de error según tus necesidades pero estos errores se controlan desde el lado del cliente para el lado del server se usa de otra manera
        };
        return errorMessages[errorKey];
      }
}
