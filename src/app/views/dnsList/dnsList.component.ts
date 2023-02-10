import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Dns} from "../../models/Dns";

@Component({
  selector: 'app-dnsList',
  templateUrl: './dnsList.component.html',
  styleUrls: ['./dnsList.component.css']
})
export class DnsListComponent {
  constructor(private http: HttpClient) {}

  getAll(domain: string | null = null): Observable<Dns[]> {
    let url = 'http://20.93.152.151:8888';
    if(domain) {
      url += '?technologyName=' + encodeURI(domain);
    }
    return this.http.get<Dns[]>(url);
  }
}
