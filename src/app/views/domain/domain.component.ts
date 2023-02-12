import {Component, OnInit} from '@angular/core';
import {DomainsService} from "../../services/DomainsService";
import {DomainDetails} from "../../models/DomainDetails";
import {DomSanitizer} from "@angular/platform-browser";
import * as URL from 'url';

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.css']
})
export class DomainComponent implements OnInit{
  path: string | null = null;
  domainName: string | undefined;
  domain: DomainDetails | null = null;
  available: boolean | null = null;
  constructor(private domainsService: DomainsService, private sanitizer: DomSanitizer) {
    this.path = URL.parse(window.location.href).pathname;
    // @ts-ignore
    this.domainName = this.path.split('/').pop();
  }

  ngOnInit() {
    this.domainsService.findLocationByDomain(this.domainName).subscribe(domain => this.domain = domain)
    // this.domainsService.findIfDomainIsAvailable(this.domainName).subscribe(available => this.available = available)
  }
}
