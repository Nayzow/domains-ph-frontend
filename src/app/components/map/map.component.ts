import * as L from 'leaflet';
import {Component, Input} from '@angular/core';

interface Vector2 {
  x: number;
  y: number;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  private map: any;
  _latitude: number | undefined = undefined;
  _longitude: number | undefined = undefined;

  @Input() set latitude(value: number | undefined) {
    if (!value) return;
    this._latitude = value;
    this.createView(this._latitude, this._longitude);
  }

  @Input() set longitude(value: number | undefined) {
    if (!value) return;
    this._longitude = value;
    this.createView(this._latitude, this._longitude);
  }

  createView(latitude: number | undefined, longitude: number | undefined) {
    if (!latitude || !longitude) return;
    this.map = L.map('map').setView([latitude, longitude], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Domains.ph',
      maxZoom: 18
    }).addTo(this.map);
  }
}
