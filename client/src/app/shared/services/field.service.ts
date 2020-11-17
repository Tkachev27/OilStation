import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Message, Field } from '../interfaces'

@Injectable({
    providedIn: 'root',
})
export class FieldService {
    constructor(private http: HttpClient) {}
    fetch(): Observable<Field[]> {
        return this.http.get<Field[]>(`/api/field`)
    }

    create(fields: Array<Field>): Observable<Field[]> {
        return this.http.post<Field[]>('/api/field', fields)
    }

    delete(field: Field): Observable<Message> {
        return this.http.delete<Message>(`/api/field/${field._id}`)
    }

    // getById(id: string): Observable<Brand> {
    //     return this.http.get<Brand>(`/api/brand/${id}`)
    // }
    // update(brand: Brand): Observable<Brand> {
    //     return this.http.patch<Brand>(`/api/brand/${brand._id}`, brand)
    // }
}
