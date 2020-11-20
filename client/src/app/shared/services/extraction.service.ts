import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Message, Extraction } from '../interfaces'

@Injectable({
    providedIn: 'root',
})
export class ExtractionService {
    constructor(private http: HttpClient) {}
    fetch(id: string, start: Date, end: Date): Observable<any> {
        return this.http.get<any>(`/api/extraction/${id}+${start}+${end}`)
    }

    create(extractions: Array<Extraction>): Observable<Extraction[]> {
        return this.http.post<Extraction[]>('/api/extraction', extractions)
    }

    delete(extraction: Extraction): Observable<Message> {
        return this.http.delete<Message>(`/api/extraction/${extraction._id}`)
    }

    // getById(id: string): Observable<Brand> {
    //     return this.http.get<Brand>(`/api/brand/${id}`)
    // }
    update(extraction: Extraction): Observable<Extraction> {
        return this.http.patch<Extraction>(
            `/api/extraction/${extraction._id}`,
            extraction
        )
    }
}
