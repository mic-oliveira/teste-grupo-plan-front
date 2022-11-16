import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HomeAppliance} from "../models/home-appliance";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HomeAppliancesService {
  private endpoint = 'home-appliances';

  constructor(private http: HttpClient) {
  }

  get(page: number = 1, perPage: number = 15, search: string = ''): Observable<HomeAppliance[]> {
    return this.http.get<HomeAppliance[]>(`${environment.url}/${this.endpoint}?page=${page}&per_page=${perPage}&filter[name]=${search}`)
  }

  delete(id: any) {
    return this.http.delete<HomeAppliance>(`${environment.url}/${this.endpoint}/${id}`)
  }

  find(id: any) {
    return this.http.get<HomeAppliance>(`${environment.url}/${this.endpoint}/${id}`)
  }

  update(homeAppliance: HomeAppliance) {
    return this.http.put<HomeAppliance>(`${environment.url}/${this.endpoint}/${homeAppliance.id}`, homeAppliance);
  }

  createOrUpdate(homeAppliance: HomeAppliance) {
    if (homeAppliance.id === undefined) {
      return this.http.post<HomeAppliance>(`${environment.url}/${this.endpoint}`, homeAppliance);
    }
    return this.update(homeAppliance);
  }
}
