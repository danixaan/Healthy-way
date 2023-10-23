import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
declare var google;

interface Marker {
  position: {
    lat: number,
    lng: number,
  };
  title: string;
}

@Component({
  selector: 'app-caminar',
  templateUrl: './caminar.page.html',
  styleUrls: ['./caminar.page.scss'],
})
export class CaminarPage implements OnInit {

  map=null;

  infoWindows: any=[];

  markers: Marker[] = [
    {
      position: {
        lat: -33.0465357109485, lng: -71.43881769623646,
      },
      title: 'Wellness Club'
    },
    {
      position: {
        lat: -33.04857712340482,lng: -71.44254556334333,
      },
      title: 'Smart Fit'
    },
    {
      position: {
        lat: -33.04602143674403,lng:  -71.44425901895156 
      },
      title: 'Animate Movement'
    },
    {
      position: {
        lat: -33.02885196541072,lng: -71.53991228758568
      },
      title: 'Gym Vital Center'
    },
    {
      position: {
        lat: -33.02511367377215,lng: -71.52474171502286,
      },
      title: 'Lautaro Training Box'
    },
    {
      position: {
        lat: -33.024095954799385,lng: -71.54416298244188 
      },
      title: 'Gym ABVM Arlegui'
    },
    {
      position: {
        lat: -33.0215007185645,lng: -71.5177015060755
      },
      title: 'Gym Miraflores'
    },
  ];

  constructor(public geolocation: Geolocation) { }

  ngOnInit() {
    this.getCurrentLocation();
  }

  getCurrentLocation = async () => {
    const position = await Geolocation.getCurrentPosition();
    console.log('Position:', position.coords.latitude,position.coords.longitude);

    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map');
        // create LatLng object
        const myLatLng = {lat: position.coords.latitude, lng: position.coords.longitude};
        // create map
        this.map = new google.maps.Map(mapEle, {
          center: myLatLng,
          zoom: 15
        });
      
        google.maps.event.addListenerOnce(this.map, 'idle', () => {
          mapEle.classList.add('show-map');
          const marker={
            position:{
              lat: position.coords.latitude,
              lng: position.coords.longitude
            },
            title: 'Usted'
          };
          this.addMarkerWithInfoWindow(marker);
          this.renderMarkers();
        });
  };

  renderMarkers() {
    this.markers.forEach(marker => {
      this.addMarkerWithInfoWindow(marker);
    });
  }

  /*addMarker(marker: Marker) {
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title
    });
  }*/

  addMarkerWithInfoWindow(marker: Marker) {
    const googleMarker = new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title
    });
  
    const infoWindow = new google.maps.InfoWindow();
  
    // Agregar contenido personalizado al InfoWindow
    infoWindow.setContent(`
      <div>
        <h4>${marker.title}</h4>
        <p>Latitud: ${marker.position.lat}</p>
        <p>Longitud: ${marker.position.lng}</p>
      </div>
    `);
  
    googleMarker.addListener('click', () => {
      infoWindow.open(this.map, googleMarker);
    });
  
    return googleMarker;
  }



}