import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Domain} from "../models/Domain";
import {DomainDetails} from "../models/DomainDetails";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class DomainsService {
  constructor(private http: HttpClient) {
  }

  findPhishingSitesByDomain(domain: string | null = null): Observable<Domain[]> {
    let url = environment.apiUrl + '/phishing/';
    if (domain) {
      url += encodeURI(domain);
    }
    return this.http.get<Domain[]>(url);
  }

  findLocationByDomain(domain: string | null = null): Observable<DomainDetails> {
    let url = environment.apiUrl + '/location/';
    if (domain) {
      url += encodeURI(domain);
    }
    return this.http.get<DomainDetails>(url);
  }

  findIpByDomain(domain: string | null = null): Observable<Domain> {
    let url = environment.apiUrl + '/ip/';
    if (domain) {
      url += encodeURI(domain);
    }
    return this.http.get<Domain>(url);
  }

  findIfDomainIsAvailable(domain: string | null = null): Observable<Domain> {
    let url = environment.apiUrl + '/available/';
    if (domain) {
      url += encodeURI(domain);
    }
    return this.http.get<Domain>(url);
  }
}
