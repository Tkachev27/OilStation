import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Message, Extraction } from '../interfaces'

@Injectable({
    providedIn: 'root',
})
export class ExtractionService {
    constructor(private http: HttpClient) {}
    fetch(id: string): Observable<Extraction[]> {
        return this.http.get<Extraction[]>(`/api/extraction/${id}`)
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
    // update(brand: Brand): Observable<Brand> {
    //     return this.http.patch<Brand>(`/api/brand/${brand._id}`, brand)
    // }
}
