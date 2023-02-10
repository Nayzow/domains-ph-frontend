import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {Dns} from "../models/Dns";


@Injectable({
  providedIn: 'root',
})
export class DnsService {
  constructor(private http: HttpClient) {}

  findPhishingSitesByDomain(domain: string | null = null): Observable<Dns[]> {
    let url = 'http://localhost:8888/phishing';
    if(domain) {
      url += '?domain=' + encodeURI(domain);
    }
    return this.http.get<Dns[]>(url);
  }

  findLocationByDomain(domain: string | null = null): Observable<Dns> {
    let url = 'http://localhost:8888/location';
    if (domain) {
      url += '?domain=' + encodeURI(domain)
    }
    return this.http.get<Dns>(url);
  }

  findIpByDomain(domain: string | null = null): Observable<Dns> {
    let url = 'http://localhost:8888/ip';
    if (domain) {
      url += '?domain=' + encodeURI(domain)
    }
    return this.http.get<Dns>(url);
  }
}
