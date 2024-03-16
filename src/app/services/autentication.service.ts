import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { APIUrls } from './url';
@Injectable({
    providedIn: 'root',
})

export class AutenticationService{
    constructor(private http: HttpClient){}

    //Método para hacer la solicitud
    postData(data:any):Observable<any>{
        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        return this.http.post<any>(APIUrls.post.createAccount,data,{headers})
    }
}