import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// import { Http, Headers, Response } from '@angular/http';

const STUDENT_API_URL= 'http://localhost:3000/';

export interface Student {
    
    firstName: string,
    lastName: string,

}

@Injectable({
    providedIn: 'root'
})
export class StudentServices {

    
    private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    constructor(private http: HttpClient) {
    }
    public saveStudent(studentObject: Student){
         // Retrives Data From Json and Supplys as Object 
    //  let tenantData = this.http.get('/assets/tenantinformation.json');
     console.log(studentObject);
     this.http.post(STUDENT_API_URL + 'student', JSON.stringify(studentObject), { headers: this.headers })
     .toPromise()
     .catch(this.handleError);
      
    console.log('After - postPersonInfo');
    }

    handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}