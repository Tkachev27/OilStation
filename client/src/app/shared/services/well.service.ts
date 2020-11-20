import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Message, Well } from '../interfaces'

@Injectable({
    providedIn: 'root',
})
export class WellService {
    constructor(private http: HttpClient) {}
    fetch(id: string): Observable<Well[]> {
        return this.http.get<Well[]>(`/api/well/${id}`)
    }

    create(wells: Array<Well>): Observable<Well[]> {
        return this.http.post<Well[]>('/api/well', wells)
    }

    delete(well: Well): Observable<Message> {
        return this.http.delete<Message>(`/api/well/${well._id}`)
    }
    update(well: Well): Observable<Well> {
        return this.http.patch<Well>(`/api/well/${well._id}`, well)
    }
}
