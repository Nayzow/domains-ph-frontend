import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Domain} from "../../models/Domain";

@Component({
  selector: 'app-domains',
  templateUrl: './domains.component.html',
  styleUrls: ['./domains.component.css']
})
export class DomainsComponent {
  constructor(private http: HttpClient) {}

  getAll(domain: string | null = null): Observable<Domain[]> {
    let url = 'http://20.93.152.151:8888';
    if(domain) {
      url += '?technologyName=' + encodeURI(domain);
    }
    return this.http.get<Domain[]>(url);
  }
}
