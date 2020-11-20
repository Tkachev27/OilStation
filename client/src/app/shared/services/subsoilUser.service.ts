import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Message, SubsoilUser } from '../interfaces'

@Injectable({
    providedIn: 'root',
})
export class SubsoilUserService {
    constructor(private http: HttpClient) {}
    fetch(): Observable<SubsoilUser[]> {
        return this.http.get<SubsoilUser[]>(`/api/subsoilUser`)
    }

    create(subsoilUsers: Array<SubsoilUser>): Observable<SubsoilUser[]> {
        return this.http.post<SubsoilUser[]>('/api/subsoilUser', subsoilUsers)
    }

    delete(subsoilUser: SubsoilUser): Observable<Message> {
        return this.http.delete<Message>(`/api/subsoilUser/${subsoilUser._id}`)
    }
    update(subsoilUser: SubsoilUser): Observable<SubsoilUser> {
        return this.http.patch<SubsoilUser>(
            `/api/subsoilUser/${subsoilUser._id}`,
            subsoilUser
        )
    }
}
