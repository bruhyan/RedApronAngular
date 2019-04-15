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
  styles= [
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "stylers": [
            {
                "hue": 149
            },
            {
                "saturation": -78
            },
            {
                "lightness": 0
            }
        ]
    },
    {
        "featureType": "road.highway",
        "stylers": [
            {
                "hue": -31
            },
            {
                "saturation": -40
            },
            {
                "lightness": 2.8
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "label",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "stylers": [
            {
                "hue": 163
            },
            {
                "saturation": -26
            },
            {
                "lightness": -1.1
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "stylers": [
            {
                "hue": 3
            },
            {
                "saturation": -24.24
            },
            {
                "lightness": -38.57
            }
        ]
    }
]
  markerIcon = "../../../assets/images/marker2.png"

  constructor() { }

  ngOnInit() {
  }

}
