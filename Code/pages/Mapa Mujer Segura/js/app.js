var locations = [
    ['<div><div></div><h1 >Fundacion de la Mujer</h1><div><p>Principal institución microfinanciera no regulada de Colombia, está comprometida con el mejoramiento de la calidad de vida y el progreso de los negocios de sus clientes. </p><p>Pagina Web <a href="https://www.fundaciondelamujer.com/" target="_blank">https://www.fundaciondelamujer.com/</a></p></div></div>', 4.653594, -74.060979, 1],
    ['<div><div></div><h1 >Secretaria de la Mujer</h1><div><p>Tiene por objeto liderar, dirigir, coordinar, articular y ejecutar las etapas de diseño, formulación,  implementación, seguimiento y evaluación de políticas públicas para las mujeres, a través de la coordinación intra e intersectorial, territorial y poblacional de estas políticas públicas, así como de los planes, programas y proyectos que le corresponda para el reconocimiento, garantía y restitución de los derechos y el fomento de las capacidades y oportunidades de las mujeres. </p><p>Pagina Web <a href="http://www.sdmujer.gov.co/" target="_blank">http://www.sdmujer.gov.co/</a></p></div></div>', 4.659553, -74.105907, 2],
    ['<div><div></div><h1 >Sisma Mujer</h1><div><p>En Sisma Mujer brindamos asesoría en casos de violencia sexual, violencia doméstica y asesinato de mujeres por el hecho de serlo (feminicidios), tanto en espacios cotidianos como derivados del conflicto armado. </p><p>Pagina Web <a href="http://www.sdmujer.gov.co/" target="_blank">http://www.sdmujer.gov.co/</a></p></div></div>', 4.621231, -74.068154, 3],
    ['<div><div></div><h1 >Casa de Igualdad de Oportunidades de Chapinero</h1><div><p>Servicios : </p><ul><li>Empoderamiento de las mujeres en el ejercicio de sus derechos.</li> <li>Fortalecimiento a grupos, redes y organizaciones de mujeres y de las instancias de coordinación de la PPMYEG en el nivel local.</li> <li>Prevención y atención de Violencias contra las mujeres. </li> <li>Orientación y acercamiento a la oferta institucional. </li> <li>Territorialización de PIOEG.</li></ul><p>Pagina Web <a href="http://www.sdmujer.gov.co/component/content/article/2-uncategorised/42-casas-de-igualdad-y-oportunidades" target="_blank">http://www.sdmujer.gov.co/</a></p></div></div>', 4.641075, -74.063846, 4],
    ['<div><div></div><h1 >CIASE</h1><div><p>Es una organización feminista mixta, que promueve la exigibilidad permanente y la realización integral de los Derechos Humanos en particular los derechos económicos, sociales, culturales y ambientales.</p><p>Pagina Web <a href="http://ciase.org/es/" target="_blank">http://ciase.org/es/</a></p></div></div>', 4.628577, -74.069373, 5],
    ['<div><div></div><h1 >Iniciativa Mujeres Colombianas por la Paz</h1><div><p>Contribuir a la contrucción de la paz desde la defensa de los derechos humanos con enfoque de género y con especial énfasis en las mujeres </p><p>Pagina Web <a href="http://www.mujeresporlapaz.org/" target="_blank">http://www.mujeresporlapaz.org/</a></p></div></div>', 4.660718, -74.063273, 6],
    ['<div><div></div><h1 >Iniciativa Mujeres Colombianas por la Paz</h1><div><p>La Corporación CENTRAP es una organización no gubernamental sin ánimo de lucro que busca contribuir al desarrollo justo, sustentable y democrático de la sociedad colombiana con perspectiva de inclusión social en equidad entre géneros, clases y étnias, por medio de la investigación, fortalecimiento organizacional, la formación y la sistematización; en las áreas de participación política y ciudadanía, género y desarrollo, manejo sustentable del medio ambiente y emprendimientos económicos en comunidades rurales y urbanas del país.</p><p>Pagina Web <a href="http://centrap.org.co/" target="_blank">http://centrap.org.co/</a></p></div></div>', 4.633830, -74.063619, 7],
    ['<div><div></div><h1 >Red Nacional de Mujeres</h1><div><p>Hemos tenido presencia en diversos procesos en pro de la garantía, promoción y defensa de los derechos de las mujeres en Colombia, sin embargo nuestro trabajo se ha centrado en tres ejes específicos: participación política y construcción de ciudadanía de las mujeres, eliminación de las diferentes violencias ejercidas contra las mujeres, y participación de las mujeres en procesos y construcción de paz. </p><p>Pagina Web <a href="https://www.rednacionaldemujeres.org/" target="_blank">https://www.rednacionaldemujeres.org/</a></p></div></div>', 4.640889, -74.064801, 8],
    ['<div><div></div><h1 >Ruta Pacifica</h1><div><p>La Ruta Pacífica de las Mujeres es un movimiento feminista que trabaja por la tramitación negociada del conflicto armado en Colombia</p><p>Pagina Web <a href="http://rutapacifica.org.co/" target="_blank">http://rutapacifica.org.co/</a></p></div></div>', 4.644695, -74.079842, 9]
];


function initMap() {
    var myLatlng = {
        lat: 4.653466,
        lng: -74.06099999999998
    };

      var styledMapType = new google.maps.StyledMapType(
      
[
    {
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
    }
],
            {name: 'Styled Map'});

    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatlng,
        zoom: 16,
        mapTypeId: 'roadmap'

    });

     map.mapTypes.set('styled_map', styledMapType);
        map.setMapTypeId('styled_map');


    var infowindow = new google.maps.InfoWindow({
        maxWidth: 320
    });
    var marker, i;

    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map,
            icon: 'img/maker2.png'
        });

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            infowindow.setPosition(pos);
            infowindow.setContent('Tu ubicación');
            infowindow.open(map);
            map.setCenter(pos);
        }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}