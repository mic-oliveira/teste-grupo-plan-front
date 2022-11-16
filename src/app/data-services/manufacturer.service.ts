import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Manufacturer} from "../models/manufacturer";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ManufacturerService {
  private endpoint = 'manufacturers';

  constructor(private http: HttpClient) { }

  get(): Observable<Manufacturer[]> {
    return this.http.get<Manufacturer[]>(`${environment.url}/${this.endpoint}`);
  }
}
