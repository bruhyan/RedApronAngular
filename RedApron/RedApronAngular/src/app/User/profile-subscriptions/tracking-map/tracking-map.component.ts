import { Component, OnInit } from '@angular/core';
import { MouseEvent, AgmMap } from '@agm/core';
import { TravelMarker, TravelMarkerOptions, TravelData, TravelEvents } from 'travel-marker';


declare var google: any;

@Component({
  selector: 'app-tracking-map',
  templateUrl: './tracking-map.component.html',
  styleUrls: ['./tracking-map.component.css'],
  styles: ['agm-map { height: 400px; }']
})
export class TrackingMapComponent implements OnInit {


  latitude = 1.2966;
  longitude = 103.7764;

  lat: number = 1.2966;
  lng: number = 103.7764;
  zoom: number = 15;
  
  mapType = 'roadmap';
  markerIcon = "../../../assets/images/truck_marker.png"

  map: any;
  line: any;
  directionsService: any;
  marker: TravelMarker = null;

  styles = [
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
  speedMultiplier = 1;
  // options

  onMapReady(map: any) {
    console.log(map);
    this.map = map;

    this.calcRoute();
  }

  // get locations from direction service
  calcRoute() {
    console.log('calcroute');
    this.line = new google.maps.Polyline({
      strokeOpacity: 0.5,
      path: [],
      map: this.map
    });

    const start = new google.maps.LatLng(1.2966, 103.7764);
    const end = new google.maps.LatLng(1.3073, 103.7901);
    const request = {
      origin: start,
      destination: end,
      travelMode: google.maps.TravelMode.DRIVING
    };
    this.directionsService = new google.maps.DirectionsService();
    this.directionsService.route(request, (response, status) => {
      console.log(status);
      if (status == google.maps.DirectionsStatus.OK) {
        // console.log(response.routes[0]);
        var legs = response.routes[0].legs;
        for (let i = 0; i < legs.length; i++) {
          var steps = legs[i].steps;
          for (let j = 0; j < steps.length; j++) {
            var nextSegment = steps[j].path;
            for (let k = 0; k < nextSegment.length; k++) {
              this.line.getPath().push(nextSegment[k]);
            }
          }
        }
        this.initRoute();
      }
    });
  }
  

  // initialize travel marker
  initRoute() {
    const route = this.line.getPath().j;
    console.log(this.line.getPath());
    const markerIcon = "../../../assets/images/truck_marker.png";
    // options
    const options: TravelMarkerOptions = {
      map: this.map,  // map object
      speed: 50,  // default 10 , animation speed
      interval: 10, // default 10, marker refresh time
      speedMultiplier: this.speedMultiplier,
      markerOptions: {
        title: 'Travel Marker',
        animation: google.maps.Animation.DROP,
        icon: {
          url: markerIcon,
          // This marker is 20 pixels wide by 32 pixels high.
          animation: google.maps.Animation.DROP,
          // size: new google.maps.Size(256, 256),
          scaledSize: new google.maps.Size(128, 128),
          // The origin for this image is (0, 0).
          origin: new google.maps.Point(0, 0),
          // The anchor for this image is the base of the flagpole at (0, 32).
          anchor: new google.maps.Point(53, 110)
        }
      },
      
    };
    
    // define marker
    this.marker = new TravelMarker(options);
    
    // add locations from direction service 
    this.marker.addLocation(route);
      
    setTimeout(() => this.play(), 2000);
  }

    constructor() { }



    ngOnInit() {
    }

    play() {
      this.marker.play();
    }
  }
