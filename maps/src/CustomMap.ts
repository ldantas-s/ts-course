/// <reference types="@types/google.maps" />

export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  name: string;
  markerContent(): string;
  color: string;
}

export class CustomMap {
  private map: google.maps.Map;

  constructor(containerElement: HTMLElement) {
    this.map = new google.maps.Map(containerElement, {
      zoom: 1,
      center: { lat: 0, lng: 0 },
    });
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.map,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
      label: mappable.name,
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });

      infoWindow.open(this.map, marker);
    });
  }
}
