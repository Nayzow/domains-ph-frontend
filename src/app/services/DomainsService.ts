import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {Domain} from "../models/Domain";


@Injectable({
  providedIn: 'root',
})
export class DomainsService {
  constructor(private http: HttpClient) {}

  findPhishingSitesByDomain(domain: string | null = null): Observable<Domain[]> {
    let url = 'http://localhost:8888/phishing';
    if(domain) {
      url += '?domain=' + encodeURI(domain);
    }
    return this.http.get<Domain[]>(url);
  }

  findLocationByDomain(domain: string | null = null): Observable<Domain> {
    let url = 'http://localhost:8888/location';
    if (domain) {
      url += '?domain=' + encodeURI(domain)
    }
    return this.http.get<Domain>(url);
  }

  findIpByDomain(domain: string | null = null): Observable<Domain> {
    let url = 'http://localhost:8888/ip';
    if (domain) {
      url += '?domain=' + encodeURI(domain)
    }
    return this.http.get<Domain>(url);
  }
}
