import { Component, OnInit } from '@angular/core';
import { coordonnees } from '../coordonne'
import Map from 'ol/Map';
import View from 'ol/View';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import { OSM, Vector as VectorSource, XYZ } from 'ol/source';
import Geolocation from 'ol/Geolocation';
import { Point } from 'ol/geom';
import { Feature } from 'ol';
import { Icon, Style } from 'ol/style';
import Overlay from 'ol/Overlay';
import { toStringHDMS } from 'ol/coordinate';





@Component({
  selector: 'app-carteequipment',
  templateUrl: './carteequipment.page.html',
  styleUrls: ['./carteequipment.page.scss'],
})
export class CarteequipmentPage implements OnInit {
  items: any[];
  map: Map  ;
  geolocation: Geolocation;
  popup: Overlay;
  container: HTMLElement | null;
  content: HTMLElement | null;
  closer: HTMLElement | null;

  constructor() {
    this.map = new Map({});
    this.geolocation = new Geolocation();
    this.popup = new Overlay({});
    this.container = document.getElementById('popup');
    this.content = document.getElementById('popup-content');
    this.closer = document.getElementById('popup-closer');
    this.items = coordonnees;
  }

  ngOnInit() {
    this.initializeMap();
  }

  initializeMap() {
    const view = new View({
      center: [-5.5117, 35.8797],
      zoom: 13.8,
      projection: 'EPSG:4326',
      // maxZoom: 21,
      // minZoom: 10,
    });
    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          // source: new XYZ({
          //   url: 'http://mt3.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}',
          // }),
          source: new OSM({
            attributions: [], // Supprime l'attribution
          }),
        }),
      ],
      view: view
    });
    // this.addGeolocation();
    this.initPopup(); 
    // this. addEquipmentToMap()
  }
  

  addGeolocation() {
    this.geolocation = new Geolocation({
      trackingOptions: {
        enableHighAccuracy: true,
      },
      projection: this.map?.getView().getProjection(),
    });

    this.geolocation.setTracking(true);

    this.geolocation.on('change:position', () => {
      const coordinates = this.geolocation.getPosition();
      console.log(coordinates)
      if (coordinates) {
        const positionFeature = new Feature(new Point(coordinates));
        // const iconStyle = new Style({
        //   image: new Icon({
        //     //anchor: [0.5, 46], // icon bottom center position
        //     // anchorXUnits: 'fraction',
        //     // anchorYUnits: 'pixels',
        //     src: 'assets/current1.png', // path to your icon image
        //     scale: 0.08, // adjust the scale to change the size of the icon
        //   })
        // });
        //positionFeature.setStyle(iconStyle);
        const vectorLayer = new VectorLayer({
          source: new VectorSource({
            features: [positionFeature],
          }),
        });

        this.map?.addLayer(vectorLayer);
        this.map?.getView().setCenter(coordinates);
      }
    });
  }

  initPopup() {
    this.container = document.getElementById('popup');
    this.content = document.getElementById('popup-content');
    this.closer = document.getElementById('popup-closer');

    if (this.container && this.content && this.closer) {
      this.popup = new Overlay({
        element: this.container,
        autoPan: {
          animation: {
            duration: 250
          }
        }
      });

      this.map?.addOverlay(this.popup);

      this.closer.onclick = () => {
        this.popup.setPosition(undefined);
        this.closer?.blur();
        return false;
      };

      this.map?.on('singleclick', (evt) => {
        const coordinate = evt.coordinate;
        //get the current location 
        const currentLocationFeature = this.map?.forEachFeatureAtPixel(evt.pixel, (feature) => feature);
        console.log(coordinate)
        if(currentLocationFeature) {
          const hdms = toStringHDMS(coordinate);
          if (this.content) {
            this.content.innerHTML = '<p> this Your current location</p> ' ;
          }
        this.popup.setPosition(coordinate);
        }
        
      });
    } else {
      console.error('Popup elements not found.');
    }
  }

  addEquipmentToMap() {
    const vectorSource = new VectorSource();
    
    this.items.forEach((item) => {
      const iconFeature = new Feature({
        geometry: new Point([item.latitude, item.longitude]), 
      });
      console.log([item.longitude, item.latitude]);
      const iconStyle = new Style({
        image: new Icon({
          anchor: [0.5, 0.5], 
          src: 'assets/blackcircle.png', 
          scale: 0.08, 
        }),
      });
    
      iconFeature.setStyle(iconStyle);
      vectorSource.addFeature(iconFeature);
    });
  
    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });
  
    this.map?.addLayer(vectorLayer);
  }
}  