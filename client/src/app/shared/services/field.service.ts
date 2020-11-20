import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Message, Field } from '../interfaces'

@Injectable({
    providedIn: 'root',
})
export class FieldService {
    constructor(private http: HttpClient) {}
    fetch(id: string): Observable<Field[]> {
        return this.http.get<Field[]>(`/api/field/${id}`)
    }

    create(fields: Array<Field>): Observable<Field[]> {
        return this.http.post<Field[]>('/api/field', fields)
    }

    delete(field: Field): Observable<Message> {
        return this.http.delete<Message>(`/api/field/${field._id}`)
    }
    update(field: Field): Observable<Field> {
        return this.http.patch<Field>(`/api/field/${field._id}`, field)
    }
}
