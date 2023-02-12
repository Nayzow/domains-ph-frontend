import * as L from 'leaflet';
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Input() latitude: number | undefined;
  @Input() longitude: number | undefined;
  private map: any;


  createView(latitude: number, longitude: number) {
    this.map = L.map('map').setView([latitude, longitude], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Domains.ph',
      maxZoom: 18
    }).addTo(this.map);
  }

  ngOnInit() {
    this.latitude && this.longitude ? this.createView(this.latitude, this.longitude) : this.createView(0, 0);
  }
}


