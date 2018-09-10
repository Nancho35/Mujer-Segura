import {
    GoogleMaps,
    GoogleMap,
    GoogleMapsEvent,
    GoogleMapOptions,
    CameraPosition,
    MarkerOptions,
    Marker,
    LocationService,
    MyLocation,
    BaseArrayClass,
    GoogleMapsAnimation,
    HtmlInfoWindow
} from '@ionic-native/google-maps';
import { Component } from "@angular/core/";
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
declare var google;

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})

export class HomePage {
    map: GoogleMap;
   
    constructor(public navCtrl: NavController, public navParams: NavParams,private geolocation: Geolocation) {

    }


    Ayuda(event) {
        LocationService.getMyLocation().then((myLocation: MyLocation) => {
            window.open("https://wa.me/+573007551846?text=Hola!%20,tengo%20una%20denuncia%20estoy%20en%20"+"http://www.google.com/maps/place/"+myLocation.latLng.lat+","+myLocation.latLng.lng+"%20-Enviado%20desde%20APP%20Mujer%20Segura")
            
        });
      }

    ionViewDidLoad() {
        this.loadMap();
        //this.getMarkers();
    }

    loadMap() {        
          
        
        LocationService.getMyLocation().then((myLocation: MyLocation) => {

            let options: GoogleMapOptions = {
                camera: {
                    target: myLocation.latLng,
                },
                preferences: {
                    zoom: {
                        minZoom: 11,
                        maxZoom: 19
                    }
                },
                styles: [{
                    "featureType": "administrative",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "lightness": 33
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        },
                        {
                            "color": "#ff0000"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e3a5d"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#f7f7f7"
                        }
                    ]
                },
                {
                    "featureType": "poi.business",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#bde1d0"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "lightness": "25"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "color": "#127a1a"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "all",
                    "stylers": [
                        {
                            "lightness": "25"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#f6e4e4"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "saturation": "-90"
                        },
                        {
                            "lightness": "25"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit.station",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#d6eeee"
                        }
                    ]
                }],


            };


            let points: any[] = [
                { lat: 4.653594, lng: -74.060979, title: '<div><div></div><h1 style="color:#761C7F; font-family: "Segoe UI Semilight", "Segoe UI", Segoe, Tahoma, Helvetica, Arial, sans-serif;">Fundacion de la Mujer</h1><div><p style="color:#C44185;  font-family: "Lora-Bold";">Principal institución microfinanciera no regulada de Colombia, está comprometida con el mejoramiento de la calidad de vida y el progreso de los negocios de sus clientes. </p><p>Pagina Web <a href="https://www.fundaciondelamujer.com/" target="_blank">https://www.fundaciondelamujer.com/</a></p></div></div>' },
                { lat: 4.659553, lng: -74.105907, title: '<div><div></div><h1 style="color:#761C7F; font-family: "Segoe UI Semilight", "Segoe UI", Segoe, Tahoma, Helvetica, Arial, sans-serif;">Secretaria de la Mujer</h1><div><p style="color:#C44185;  font-family: "Lora-Bold";">Tiene por objeto liderar, dirigir, coordinar, articular y ejecutar las etapas de diseño, formulación,  implementación, seguimiento y evaluación de políticas públicas para las mujeres, a través de la coordinación intra e intersectorial, territorial y poblacional de estas políticas públicas...</p><p>Pagina Web <a href="http://www.sdmujer.gov.co/" target="_blank">http://www.sdmujer.gov.co/</a></p></div></div>' },
                { lat: 4.621231, lng: -74.068154, title: '<div><div></div><h1 style="color:#761C7F; font-family: "Segoe UI Semilight", "Segoe UI", Segoe, Tahoma, Helvetica, Arial, sans-serif;">Sisma Mujer</h1><div><p style="color:#C44185;  font-family: "Lora-Bold";">En Sisma Mujer brindamos asesoría en casos de violencia sexual, violencia doméstica y asesinato de mujeres por el hecho de serlo (feminicidios), tanto en espacios cotidianos como derivados del conflicto armado. </p><p>Pagina Web <a href="http://www.sdmujer.gov.co/" target="_blank">http://www.sdmujer.gov.co/</a></p></div></div>' },
                { lat: 4.641075, lng: -74.063846, title: '<div><div></div><h1 style="color:#761C7F; font-family: "Segoe UI Semilight", "Segoe UI", Segoe, Tahoma, Helvetica, Arial, sans-serif;">Casa de Igualdad de Oportunidades de Chapinero</h1><div><p>Servicios : </p><ul style="color:#C44185;  font-family: "Lora-Bold";"><li>Empoderamiento de las mujeres en el ejercicio de sus derechos.</li> <li>Fortalecimiento a grupos, redes y organizaciones de mujeres y de las instancias de coordinación de la PPMYEG en el nivel local.</li> <li>Mas... </li></ul><p>Pagina Web <a href="http://www.sdmujer.gov.co/component/content/article/2-uncategorised/42-casas-de-igualdad-y-oportunidades" target="_blank">http://www.sdmujer.gov.co/</a></p></div></div>' }
            ];
            this.map = GoogleMaps.create('map_canvas', options);

           

            this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
                let baseArray: BaseArrayClass<any> = new BaseArrayClass(points);
                baseArray.forEach((position: any, idx: number) => {
                    console.log(position.name);

                    //info windows
                    let htmlInfoWindow = new HtmlInfoWindow();
                    let frame: HTMLElement = document.createElement('div');
                    frame.innerHTML = position.title
                    htmlInfoWindow.setContent(frame, {  maxwidth: "600px", maxheight: "600px",minheight: "500px",minwidth:"500px"   });
                    

                    

                    let marker: Marker = this.map.addMarkerSync({
                        position: position,
                        icon: {
                            url: 'assets/imgs/maker2.png'
                        },
                       // title: position.title,
                        animation: GoogleMapsAnimation.BOUNCE,
                    })

                    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
                        //marker.showInfoWindow();
                        htmlInfoWindow.open(marker);

                    });
                })
            })

            this.map.addMarker({
                title: 'Aqui estas',
                icon: "red",
                animation: 'DROP',
                position: myLocation.latLng
            }).then((marker: Marker) => {
                marker.showInfoWindow();
            });



        });


    }



}