import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  getPhoto(id : number) {
    return this.http.get(`https://picsum.photos/id/${id}/500/500`,  { responseType: 'blob' });
  }
}
