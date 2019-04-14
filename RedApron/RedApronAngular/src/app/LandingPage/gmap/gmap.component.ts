import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gmap',
  templateUrl: './gmap.component.html',
  styleUrls: ['./gmap.component.css'],
  styles: ['agm-map { height: 300px; /* height is required */ }']
})
export class GmapComponent implements OnInit {

  latitude = 1.2966;
  longitude = 103.7764;
  mapType = 'roadmap';
  markerIcon = "../../../assets/images/marker2.png"

  constructor() { }

  ngOnInit() {
  }

}
