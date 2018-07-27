import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Geolocation, Geoposition } from '@ionic-native/geolocation';


declare var google;
var locations = [
        ['<div class="infoWindow" ><h1 > Cavif</h1><div><p> Centro de Atención e Investigación Integral contra la Violencia Intrafamiliar, para solicitar que los hechos sean investigados y el agresor sea juzgado y castigado.</p><p> Cra. 13 #18-38, Bogotá</p></div></div>', 4.6074771,-74.07569949999998, 1],
        ​ ['<div class="infoWindow" ><h1 > CAIVAS: </h1><div><p> Centro de Atención e Investigación Integral a las Víctimas de Delitos Sexuales, para solicitar que los hechos sean investigados y el agresor sea juzgado y castigado.</p><p> Cra 5ta No 34 – 07 </p></div></div>', 4.6204573,-74.06499660000003, 1],
        ​ ['<div class="infoWindow" ><h1 > CAIVAS: </h1><div><p> Centro de Atención e Investigación Integral a las Víctimas de Delitos Sexuales, para solicitar que los hechos sean investigados y el agresor sea juzgado y castigado.</p><p> Cra 33 No 18 – 33 Bloque B 2do Piso </p></div></div>', 4.6206173,-74.09123540000002, 1],
        ​ ['<div class="infoWindow" ><h1 > COMISARIA DE FAMILIAUSAQUEN 1</h1><div><p> Entidades de carácter administrativo cuya misión es prevenir, garantizar , reestablecer y reparar los derechos de los miembros de la familia que han sido Víctima de Violencia Intrafamiliar.</p><p> Calle 159 No 7F-28</p></div></div>', 4.734505,-74.02685, 1],
        ​ ['<div class="infoWindow" ><h1 > COMISARIA DE FAMILIAUSAQUEN 2</h1><div><p> Entidades de carácter administrativo cuya misión es prevenir, garantizar , reestablecer y reparar los derechos de los miembros de la familia que han sido Víctima de Violencia Intrafamiliar.</p><p> Calle 153a No. 7- 08 piso-2</p></div></div>', 4.728771,-74.024409, 1],
        ​ ['<div class="infoWindow" ><h1 > COMISARIA DE FAMILIACHAPINERO </h1><div><p> Entidades de carácter administrativo cuya misión es prevenir, garantizar , reestablecer y reparar los derechos de los miembros de la familia que han sido Víctima de Violencia Intrafamiliar.</p><p> Calle 61 No.7-51</p></div></div>', 4.64637,-74.061314, 1],
        ​ ['<div class="infoWindow" ><h1 > COMISARIA DE FAMILIASANTAFE </h1><div><p> Entidades de carácter administrativo cuya misión es prevenir, garantizar , reestablecer y reparar los derechos de los miembros de la familia que han sido Víctima de Violencia Intrafamiliar.</p><p> Calle 15 No.13-86 PI.2</p></div></div>', 4.605865,-74.077789, 1],
        ​ ['<div class="infoWindow" ><h1 > COMISARIA DE FAMILIASAN CRISTOBAL 1</h1><div><p> Entidades de carácter administrativo cuya misión es prevenir, garantizar , reestablecer y reparar los derechos de los miembros de la familia que han sido Víctima de Violencia Intrafamiliar.</p><p> Avda. 1°. De Mayo No.1-40 sur </p></div></div>', 4.570053,-74.087631, 1],
        ​ ['<div class="infoWindow" ><h1 > COMISARIA DE FAMILIASAN CRISTOBAL 2 </h1><div><p> Entidades de carácter administrativo cuya misión es prevenir, garantizar , reestablecer y reparar los derechos de los miembros de la familia que han sido Víctima de Violencia Intrafamiliar.</p><p> Calle 31C sur No. 3 -67 Este/ Casa de Justicia- Bellohorizonte</p></div></div>', 4.559181,-74.091784, 1],
        ​ ['<div class="infoWindow" ><h1 > COMISARIA DE FAMILIAUSME 1</h1><div><p> Entidades de carácter administrativo cuya misión es prevenir, garantizar , reestablecer y reparar los derechos de los miembros de la familia que han sido Víctima de Violencia Intrafamiliar.</p><p> Calle 137C Sur No2A-51 Usme Centro PI.4</p></div></div>', 4.470232,-74.125206, 1],
        ​ ['<div class="infoWindow" ><h1 > COMISARIA DE FAMILIAUSME 2</h1><div><p> Entidades de carácter administrativo cuya misión es prevenir, garantizar , reestablecer y reparar los derechos de los miembros de la familia que han sido Víctima de Violencia Intrafamiliar.</p><p> Cra. 14 No. 73B-68 Sur Santa Librada</p></div></div>', 4.515001,-74.114453, 1],
        ​ ['<div class="infoWindow" ><h1 > COMISARIA DE FAMILIATUNJUELITO </h1><div><p> Entidades de carácter administrativo cuya misión es prevenir, garantizar , reestablecer y reparar los derechos de los miembros de la familia que han sido Víctima de Violencia Intrafamiliar.</p><p> Calle 50 Sur No.35-70 Barrio Fatima</p></div></div>', 4.587356,-74.137545, 1],
        ​ ['<div class="infoWindow" ><h1 > COMISARIA DE FAMILIABOSA 1</h1><div><p> Entidades de carácter administrativo cuya misión es prevenir, garantizar , reestablecer y reparar los derechos de los miembros de la familia que han sido Víctima de Violencia Intrafamiliar.</p><p> Carrera 81 D No.59 A-59 Sur - Barrio Argelia Casa de Justicia</p></div></div>', 4.610224,-74.184922, 1],
        ​ ['<div class="infoWindow" ><h1 > COMISARIA DE FAMILIABOSA 2</h1><div><p> Entidades de carácter administrativo cuya misión es prevenir, garantizar , reestablecer y reparar los derechos de los miembros de la familia que han sido Víctima de Violencia Intrafamiliar.</p><p> Carrera 100 No 52-24 sur CDC El Porvenir</p></div></div>', 4.643156,-74.188438, 1],
        ​ ['<div class="infoWindow" ><h1 > COMISARIA DE FAMILIAKENNEDY 1</h1><div><p> Entidades de carácter administrativo cuya misión es prevenir, garantizar , reestablecer y reparar los derechos de los miembros de la familia que han sido Víctima de Violencia Intrafamiliar.</p><p> Carrera 74 No  42 G- 52 SUR LAGO-TIMIZA</p></div></div>', 4.609993,-74.158436, 1],
        ​ ['<div class="infoWindow" ><h1 > COMISARIA DE FAMILIAKENNEDY 2 </h1><div><p> Entidades de carácter administrativo cuya misión es prevenir, garantizar , reestablecer y reparar los derechos de los miembros de la familia que han sido Víctima de Violencia Intrafamiliar.</p><p> Carrera 87 No. 5-41 Patio Bonito Segundo Sector</p></div></div>', 4.640553,-74.15951, 1],
        ​ ['<div class="infoWindow" ><h1 > COMISARIA DE FAMILIAKENNEDY 3</h1><div><p> Entidades de carácter administrativo cuya misión es prevenir, garantizar , reestablecer y reparar los derechos de los miembros de la familia que han sido Víctima de Violencia Intrafamiliar.</p><p> Carrera 69 F No. 5A - 82 Barrio Nueva Marsella</p></div></div>', 4.66963,-74.122341, 1],
        ​ ['<div class="infoWindow" ><h1 > COMISARIA DE FAMILIAKENNEDY 4</h1><div><p> Entidades de carácter administrativo cuya misión es prevenir, garantizar , reestablecer y reparar los derechos de los miembros de la familia que han sido Víctima de Violencia Intrafamiliar.</p><p> Transversal 73 D (Avenida 1° de Mayo) No. 38 C 72 sur, Barrio Timiza - Casa de Justicia</p></div></div>', 4.617355,-74.150547, 1],
        ​ ['<div class="infoWindow" ><h1 > COMISARIA DE FAMILIAKENNEDY 5</h1><div><p> Entidades de carácter administrativo cuya misión es prevenir, garantizar , reestablecer y reparar los derechos de los miembros de la familia que han sido Víctima de Violencia Intrafamiliar.</p><p> Carrera 87 No. 5-41 Patio Bonito Segundo Sector</p></div></div>', 4.640553,-74.15951, 1],
        ​ ['<div class="infoWindow" ><h1 > COMISARIA DE FAMILIAFONTIBON </h1><div><p> Entidades de carácter administrativo cuya misión es prevenir, garantizar , reestablecer y reparar los derechos de los miembros de la familia que han sido Víctima de Violencia Intrafamiliar.</p><p> Calle 19 No. 99-67 Casa de Justicia</p></div></div>', 4.674448,-74.143859, 1],
        ​ ['<div class="infoWindow" ><h1 > COMISARIA DE FAMILIAENGATIVA 1</h1><div><p> Entidades de carácter administrativo cuya misión es prevenir, garantizar , reestablecer y reparar los derechos de los miembros de la familia que han sido Víctima de Violencia Intrafamiliar.</p><p> Calle 71 No.73A-44 PI.2 Barrio Boyaca Real</p></div></div>', 4.687384,-74.098141, 1],
        ​ ['<div class="infoWindow" ><h1 > COMISARIA DE FAMILIAENGATIVA 2</h1><div><p> Entidades de carácter administrativo cuya misión es prevenir, garantizar , reestablecer y reparar los derechos de los miembros de la familia que han sido Víctima de Violencia Intrafamiliar.</p><p> Av.Calle 72 No.110 B-13 Barrio Villa Amalia</p></div></div>', 4.710756,-74.125489, 1],
        ​ ['<div class="infoWindow" ><h1 > COMISARIA DE FAMILIASUBA 1</h1><div><p> Entidades de carácter administrativo cuya misión es prevenir, garantizar , reestablecer y reparar los derechos de los miembros de la familia que han sido Víctima de Violencia Intrafamiliar.</p><p> Carrera 59 No. 131 A - 15 Ciudad Jardín Casa de Justicia Satelite Niza</p></div></div>', 4.723226,-74.069711, 1],
        ​ ['<div class="infoWindow" ><h1 > COMISARIA DE FAMILIASUBA 2</h1><div><p> Entidades de carácter administrativo cuya misión es prevenir, garantizar , reestablecer y reparar los derechos de los miembros de la familia que han sido Víctima de Violencia Intrafamiliar.</p><p> Calle 146 B No. 90 - 26 Casa del Deporte</p></div></div>', 4.739865,-74.083996, 1],
        ​ ['<div class="infoWindow" ><h1 > COMISARIA DE FAMILIASUBA3</h1><div><p> Entidades de carácter administrativo cuya misión es prevenir, garantizar , reestablecer y reparar los derechos de los miembros de la familia que han sido Víctima de Violencia Intrafamiliar.</p><p> Calle 145 No 103B-65 Piso 3 C.C ALPASO PLAZA Casa de Justicia.</p></div></div>', 4.745623,-74.096116, 1],
        ​ ['<div class="infoWindow" ><h1 > COMISARIA DE FAMILIASUBA 4</h1><div><p> Entidades de carácter administrativo cuya misión es prevenir, garantizar , reestablecer y reparar los derechos de los miembros de la familia que han sido Víctima de Violencia Intrafamiliar.</p><p> Carrera 143 No. 132 A - 45 Barrio Villa Gloria- Lisboa</p></div></div>', 4.74486,-74.116696, 1],
        ​ ['<div class="infoWindow" ><h1 > COMISARIA DE FAMILIABARRIOS UNIDOS </h1><div><p> Entidades de carácter administrativo cuya misión es prevenir, garantizar , reestablecer y reparar los derechos de los miembros de la familia que han sido Víctima de Violencia Intrafamiliar.</p><p> Carrera 28 No. 70-08 Barrio Alcazares</p></div></div>', 4.66268,-74.071965, 1],
        ​ ['<div class="infoWindow" ><h1 > COMISARIA DE FAMILIATEUSAQUILLO </h1><div><p> Entidades de carácter administrativo cuya misión es prevenir, garantizar , reestablecer y reparar los derechos de los miembros de la familia que han sido Víctima de Violencia Intrafamiliar.</p><p> Carrera 17 No.39A-38</p></div></div>', 4.628347,-74.071085, 1],
        ​ ['<div class="infoWindow" ><h1 > COMISARIA DE FAMILIAMARTIRES </h1><div><p> Entidades de carácter administrativo cuya misión es prevenir, garantizar , reestablecer y reparar los derechos de los miembros de la familia que han sido Víctima de Violencia Intrafamiliar.</p><p> Carrera 21 No.14-75</p></div></div>', 4.610614,-74.085385, 1],
        ​ ['<div class="infoWindow" ><h1 > COMISARIA DE FAMILIACAPIV</h1><div><p> Entidades de carácter administrativo cuya misión es prevenir, garantizar , reestablecer y reparar los derechos de los miembros de la familia que han sido Víctima de Violencia Intrafamiliar.</p><p> Avda. 19 No. 27-09 Piso 1 y 3</p></div></div>', 4.615171,-74.08481, 1],
        ​ ['<div class="infoWindow" ><h1 > COMISARIA DE FAMILIAANTONIO NARIÑO </h1><div><p> Entidades de carácter administrativo cuya misión es prevenir, garantizar , reestablecer y reparar los derechos de los miembros de la familia que han sido Víctima de Violencia Intrafamiliar.</p><p> Transv. 21 A No. 19-54 Sur Restrepo</p></div></div>', 4.584449,-74.103326, 1],
        ​ ['<div class="infoWindow" ><h1 > COMISARIA DE FAMILIAPUENTE ARANDA </h1><div><p> Entidades de carácter administrativo cuya misión es prevenir, garantizar , reestablecer y reparar los derechos de los miembros de la familia que han sido Víctima de Violencia Intrafamiliar.</p><p> Calle 4 No. 31 D 20</p></div></div>', 4.617617,-74.116067, 1],
        ​ ['<div class="infoWindow" ><h1 > COMISARIA DE FAMILIACANDELARIA </h1><div><p> Entidades de carácter administrativo cuya misión es prevenir, garantizar , reestablecer y reparar los derechos de los miembros de la familia que han sido Víctima de Violencia Intrafamiliar.</p><p> Carrera 8 No. 6B-28 PI.2</p></div></div>', 4.593218,-74.079459, 1],
        ​ ['<div class="infoWindow" ><h1 > COMISARIA DE FAMILIARAFAEL URIBE URIBE </h1><div><p> Entidades de carácter administrativo cuya misión es prevenir, garantizar , reestablecer y reparar los derechos de los miembros de la familia que han sido Víctima de Violencia Intrafamiliar.</p><p> Calle 32 Sur No.23-62 Barrio Quiroga</p></div></div>', 4.581281,-74.114756, 1],
        ​ ['<div class="infoWindow" ><h1 > COMISARIA DE FAMILIACIUDAD BOLIVAR 1</h1><div><p> Entidades de carácter administrativo cuya misión es prevenir, garantizar , reestablecer y reparar los derechos de los miembros de la familia que han sido Víctima de Violencia Intrafamiliar.</p><p> Transv.73 No.70A-04 Sur- Sierra Morena - Casa de Justicia</p></div></div>', 4.575878900000001,-74.16933560000001, 1],
        ​ ['<div class="infoWindow" ><h1 > COMISARIA DE FAMILIACIUDAD BOLIVAR 2</h1><div><p> Entidades de carácter administrativo cuya misión es prevenir, garantizar , reestablecer y reparar los derechos de los miembros de la familia que han sido Víctima de Violencia Intrafamiliar.</p><p> Diagonal 62 No. 20 F - 20 Sur Piso 2 Complejo Administrativo y Judicial Ciudad Bolívar.</p></div></div>', 4.564778,-74.142434, 1],
        ​ ['<div class="infoWindow" ><h1 > COMISARIA DE FAMILIASUMAPAZ </h1><div><p> Entidades de carácter administrativo cuya misión es prevenir, garantizar , reestablecer y reparar los derechos de los miembros de la familia que han sido Víctima de Violencia Intrafamiliar.</p><p> Vereda Santa Rosa Corregimiento de Nazareth -Centro de Servicios</p></div></div>', 4.691182,-74.08215, 1],
        ​ ['<div class="infoWindow" ><h1 > COMISARIA DE FAMILIAMÓVIL 1</h1><div><p> Entidades de carácter administrativo cuya misión es prevenir, garantizar , reestablecer y reparar los derechos de los miembros de la familia que han sido Víctima de Violencia Intrafamiliar.</p><p> Zona Sur 1</p></div></div>', 4.580323,-74.078008, 1],
        ​ ['<div class="infoWindow" ><h1 > COMISARIA DE FAMILIAMÓVIL 2</h1><div><p> Entidades de carácter administrativo cuya misión es prevenir, garantizar , reestablecer y reparar los derechos de los miembros de la familia que han sido Víctima de Violencia Intrafamiliar.</p><p> Zona Norte 2</p></div></div>', 4.710989,-74.072092, 1],
        ​ ['<div class="infoWindow" ><h1 > COMISARIA DE FAMILIACAVIF</h1><div><p> Entidades de carácter administrativo cuya misión es prevenir, garantizar , reestablecer y reparar los derechos de los miembros de la familia que han sido Víctima de Violencia Intrafamiliar.</p><p> CARRERA 33 NO 18-33 PISO 1 BLOQUE B</p></div></div>', 4.620617,-74.091235, 1],
        ​ ['<div class="infoWindow" ><h1 > COMISARIA DE FAMILIACAIVAS</h1><div><p> Entidades de carácter administrativo cuya misión es prevenir, garantizar , reestablecer y reparar los derechos de los miembros de la familia que han sido Víctima de Violencia Intrafamiliar.</p><p> CARRERA 33 NO 18-33 PISO 4 BLOQUE B</p></div></div>', 4.620617,-74.091235, 1],
        ​ ['<div class="infoWindow" ><h1 > URI </h1><div><p> Unidades de Reacción inmediata, , para solicitar que los hechos sean investigados y el agresor sea juzgado y castigado.</p><p> Carrera 40 No. 10ª-08- piso 4 </p></div></div>', 4.617993,-74.103204, 1],
        ​ ['<div class="infoWindow" ><h1 > URI </h1><div><p> Unidades de Reacción inmediata, , para solicitar que los hechos sean investigados y el agresor sea juzgado y castigado.</p><p> Carrera 29 No. 18-45-, Piso 1- Bloque d </p></div></div>', 4.596896099999999,-74.1041707, 1],
        ​ ['<div class="infoWindow" ><h1 > URI </h1><div><p> Unidades de Reacción inmediata, , para solicitar que los hechos sean investigados y el agresor sea juzgado y castigado.</p><p> Avenida caracas calle 51 sur No. 7-76- Estación Molinos </p></div></div>', 4.55565,-74.121606, 1],
        ​ ['<div class="infoWindow" ><h1 > URI </h1><div><p> Unidades de Reacción inmediata, , para solicitar que los hechos sean investigados y el agresor sea juzgado y castigado.</p><p> Carrera 69 No. 36-70 sur piso 4 </p></div></div>', 4.522802,-74.119204, 1],
        ​ ['<div class="infoWindow" ><h1 > URI </h1><div><p> Unidades de Reacción inmediata, , para solicitar que los hechos sean investigados y el agresor sea juzgado y castigado.</p><p> Carrera 78 No. 77ª-62 </p></div></div>', 4.642402,-74.139713, 1],
        ​ ['<div class="infoWindow" ><h1 > SAU  </h1><div><p> Salas de Atención al Usuario , para solicitar que los hechos sean investigados y el agresor sea juzgado y castigado.</p><p> CRA 33 N 18-33 PISO 1 PUERTA 4 </p></div></div>', 4.620617,-74.091235, 1],
        ​ ['<div class="infoWindow" ><h1 > SAU  </h1><div><p> Salas de Atención al Usuario , para solicitar que los hechos sean investigados y el agresor sea juzgado y castigado.</p><p> CARRERA 69 No 36-70/76 SUR </p></div></div>', 4.683406,-74.086073, 1],
        ​ ['<div class="infoWindow" ><h1 > SAU  </h1><div><p> Salas de Atención al Usuario , para solicitar que los hechos sean investigados y el agresor sea juzgado y castigado.</p><p> AV CARACAS CALLE 51 No7 - 76 PISO 1 </p></div></div>', 4.638392,-74.066523, 1],
        ​ ['<div class="infoWindow" ><h1 > SAU  </h1><div><p> Salas de Atención al Usuario , para solicitar que los hechos sean investigados y el agresor sea juzgado y castigado.</p><p> CALLE 71 No 73 A 44 PISO 3 </p></div></div>', 4.687401,-74.098123, 1],
        ​ ['<div class="infoWindow" ><h1 > SAU  </h1><div><p> Salas de Atención al Usuario , para solicitar que los hechos sean investigados y el agresor sea juzgado y castigado.</p><p> CALLE 133 No 101 C -09 </p></div></div>', 4.736241,-74.096542, 1],
        ​ ['<div class="infoWindow" ><h1 > SAU  </h1><div><p> Salas de Atención al Usuario , para solicitar que los hechos sean investigados y el agresor sea juzgado y castigado.</p><p> TRASV 73 No 70 A -04 SUR LA CASONA </p></div></div>', 4.686353,-74.091239, 1],
        ​ ['<div class="infoWindow" ><h1 > SAU  </h1><div><p> Salas de Atención al Usuario , para solicitar que los hechos sean investigados y el agresor sea juzgado y castigado.</p><p> CALLE 146 A N 94 A -05 </p></div></div>', 4.727112,-74.039004, 1],
        ​ ['<div class="infoWindow" ><h1 > SAU  </h1><div><p> Salas de Atención al Usuario , para solicitar que los hechos sean investigados y el agresor sea juzgado y castigado.</p><p> CRA 21 No 14-75 P 2 </p></div></div>', 4.610614,-74.085385, 1],
        ​ ['<div class="infoWindow" ><h1 > SAU  </h1><div><p> Salas de Atención al Usuario , para solicitar que los hechos sean investigados y el agresor sea juzgado y castigado.</p><p> CRA 81 D No 59- A -59 SUR </p></div></div>', 4.614048,-74.184342, 1],
        ​ ['<div class="infoWindow" ><h1 > SAU  </h1><div><p> Salas de Atención al Usuario , para solicitar que los hechos sean investigados y el agresor sea juzgado y castigado.</p><p> CALLE 5 N 4 - 53 USME </p></div></div>', 4.506367,-74.107952, 1],
        ​ ['<div class="infoWindow" ><h1 > SAU  </h1><div><p> Salas de Atención al Usuario , para solicitar que los hechos sean investigados y el agresor sea juzgado y castigado.</p><p> TRA 73 D AV 1 MAYO 38 C - 72 SUR </p></div></div>', 4.617355,-74.150547, 1],
        ​ ['<div class="infoWindow" ><h1 > SAU  </h1><div><p> Salas de Atención al Usuario , para solicitar que los hechos sean investigados y el agresor sea juzgado y castigado.</p><p> CALLE 19 No 99-67 </p></div></div>', 4.674263,-74.143838, 1],
        ​ ['<div class="infoWindow" ><h1 > SAU  </h1><div><p> Salas de Atención al Usuario , para solicitar que los hechos sean investigados y el agresor sea juzgado y castigado.</p><p> CALLE 18 No 68 A -69 </p></div></div>', 4.644941,-74.119623, 1],
        ​ ['<div class="infoWindow" ><h1 > Policía y policia judicial</h1><div><p> Oficina de quejas y contravenciones,para solicitar que los hechos sean investigados y el agresor sea juzgado y castigado.</p><p> Calle 165 No. 19-85 </p></div></div>', 4.710989,-74.072092, 1],
        ​ ['<div class="infoWindow" ><h1 > Policía y policia judicial</h1><div><p> Oficina de quejas y contravenciones,para solicitar que los hechos sean investigados y el agresor sea juzgado y castigado.</p><p> Calle 94 No. 20-24 </p></div></div>', 4.681211,-74.055333, 1],
        ​ ['<div class="infoWindow" ><h1 > Policía y policia judicial</h1><div><p> Oficina de quejas y contravenciones,para solicitar que los hechos sean investigados y el agresor sea juzgado y castigado.</p><p> Carrera 1 No. 57-00  </p></div></div>', 4.603244,-74.065243, 1],
        ​ ['<div class="infoWindow" ><h1 > Policía y policia judicial</h1><div><p> Oficina de quejas y contravenciones,para solicitar que los hechos sean investigados y el agresor sea juzgado y castigado.</p><p> Carrera 1. No. 18A-96 </p></div></div>', 4.602345,-74.066165, 1],
        ​ ['<div class="infoWindow" ><h1 > Policía y policia judicial</h1><div><p> Oficina de quejas y contravenciones,para solicitar que los hechos sean investigados y el agresor sea juzgado y castigado.</p><p> Carrera 5 No. 29-46 </p></div></div>', 4.615341,-74.066637, 1],
        ​ ['<div class="infoWindow" ><h1 > Policía y policia judicial</h1><div><p> Oficina de quejas y contravenciones,para solicitar que los hechos sean investigados y el agresor sea juzgado y castigado.</p><p> Carrera 13 No. 26-62  </p></div></div>', 4.613692,-74.07061, 1],
        ​ ['<div class="infoWindow" ><h1 > Policía y policia judicial</h1><div><p> Oficina de quejas y contravenciones,para solicitar que los hechos sean investigados y el agresor sea juzgado y castigado.</p><p> Calle 13 Sur No. 8-05  </p></div></div>', 4.57987,-74.08928, 1],
        ​ ['<div class="infoWindow" ><h1 > Policía y policia judicial</h1><div><p> Oficina de quejas y contravenciones,para solicitar que los hechos sean investigados y el agresor sea juzgado y castigado.</p><p> Carrera 29A Este No. 91-79 </p></div></div>', 4.666076,-74.072376, 1],
        ​ ['<div class="infoWindow" ><h1 > Policía y policia judicial</h1><div><p> Oficina de quejas y contravenciones,para solicitar que los hechos sean investigados y el agresor sea juzgado y castigado.</p><p> Transversal 33 No. 48C-21 Sur  </p></div></div>', 4.585635,-74.133267, 1],
        ​ ['<div class="infoWindow" ><h1 > Policía y policia judicial</h1><div><p> Oficina de quejas y contravenciones,para solicitar que los hechos sean investigados y el agresor sea juzgado y castigado.</p><p> Calle 14 No. 13-20 </p></div></div>', 4.583744,-74.096333, 1],
        ​ ['<div class="infoWindow" ><h1 > Policía y policia judicial</h1><div><p> Oficina de quejas y contravenciones,para solicitar que los hechos sean investigados y el agresor sea juzgado y castigado.</p><p> Calle 41D No. 81A-43 Sur </p></div></div>', 4.627153,-74.164248, 1],
        ​ ['<div class="infoWindow" ><h1 > Policía y policia judicial</h1><div><p> Oficina de quejas y contravenciones,para solicitar que los hechos sean investigados y el agresor sea juzgado y castigado.</p><p> Carrera 98 No. 18-90 </p></div></div>', 4.673122,-74.142754, 1],
        ​ ['<div class="infoWindow" ><h1 > Policía y policia judicial</h1><div><p> Oficina de quejas y contravenciones,para solicitar que los hechos sean investigados y el agresor sea juzgado y castigado.</p><p> Carrera 92 No. 143-31 </p></div></div>', 4.748488,-74.081392, 1],
        ​ ['<div class="infoWindow" ><h1 > Policía y policia judicial</h1><div><p> Oficina de quejas y contravenciones,para solicitar que los hechos sean investigados y el agresor sea juzgado y castigado.</p><p> Calle 72 No. 50-81 </p></div></div>', 4.691601,-74.100119, 1],
        ​ ['<div class="infoWindow" ><h1 > Policía y policia judicial</h1><div><p> Oficina de quejas y contravenciones,para solicitar que los hechos sean investigados y el agresor sea juzgado y castigado.</p><p> Calle 40 No. 8-09 </p></div></div>', 4.561321,-74.106038, 1],
        ​ ['<div class="infoWindow" ><h1 > Policía y policia judicial</h1><div><p> Oficina de quejas y contravenciones,para solicitar que los hechos sean investigados y el agresor sea juzgado y castigado.</p><p> Carrera 24 No. 12-50 </p></div></div>', 4.609278,-74.0889, 1],
        ​ ['<div class="infoWindow" ><h1 > Policía y policia judicial</h1><div><p> Oficina de quejas y contravenciones,para solicitar que los hechos sean investigados y el agresor sea juzgado y castigado.</p><p> Calle 19 sur No. 20-84 </p></div></div>', 4.584463,-74.104921, 1],
        ​ ['<div class="infoWindow" ><h1 > Policía y policia judicial</h1><div><p> Oficina de quejas y contravenciones,para solicitar que los hechos sean investigados y el agresor sea juzgado y castigado.</p><p> Diagonal 2 No. 57 A-27 </p></div></div>', 4.617793,-74.123284, 1],
        ​ ['<div class="infoWindow" ><h1 > Policía y policia judicial</h1><div><p> Oficina de quejas y contravenciones,para solicitar que los hechos sean investigados y el agresor sea juzgado y castigado.</p><p> Carrera 7 No. 4-12 </p></div></div>', 4.611607,-74.069402, 1],
        ​ ['<div class="infoWindow" ><h1 > Policía y policia judicial</h1><div><p> Oficina de quejas y contravenciones,para solicitar que los hechos sean investigados y el agresor sea juzgado y castigado.</p><p> Calle 62 No. 18 A-25 Sur </p></div></div>', 4.648748,-74.062907, 1],
        ​ ['<div class="infoWindow" ><h1 > DIJIN </h1><div><p> Contribuye a la seguridad y convivencia ciudadana, mediante el desarrollo efectivo de la investigación judicial, criminalística, criminológica y la administración de la información criminal </p><p> Av. El Dorado No. 75 - 25</p></div></div>', 4.6708367,-74.11540769999999, 1],
        ​ ['<div class="infoWindow" ><h1 > SIJIN </h1><div><p> La Dirección de Investigación Criminal e Interpol o DIJIN antiguas siglasde (Dirección Central de Policía Judicial e Inteligencia) es una dirección dentro de la organización de la Policía Nacional de Colombia, que ejerce las funciones de Policía Judicial. </p><p> Cr14 6-51 </p></div></div>', 4.5975703,4.5975703, 1],
        ​ ['<div class="infoWindow" ><h1 > CTI </h1><div><p> planificación, organización, gestión, control y ejecución de las funciones de Policía Judicial en La Fiscalía. </p><p> Cl 18 A 69 B-15 </p></div></div>', 4.6476089,-74.1213166, 1],
        ​ ['<div class="infoWindow" ><h1 > Estaciones de Policía </h1><div><p> Encargados de proteger a la comunidad </p><p> Calle 165 No. 19-85</p></div></div>', 4.710989,-74.072092, 1],
        ​ ['<div class="infoWindow" ><h1 > Estaciones de Policía </h1><div><p> Encargados de proteger a la comunidad </p><p> Cra. 1  57-00</p></div></div>', 4.603244,-74.065243, 1],
        ​ ['<div class="infoWindow" ><h1 > Estaciones de Policía </h1><div><p> Encargados de proteger a la comunidad </p><p> Cra. 1  18ª -96</p></div></div>', 4.601374,-74.066485, 1],
        ​ ['<div class="infoWindow" ><h1 > Estaciones de Policía </h1><div><p> Encargados de proteger a la comunidad </p><p> Av. 1 de mayo 1-40 Sur</p></div></div>', 4.570053,-74.087631, 1],
        ​ ['<div class="infoWindow" ><h1 > Estaciones de Policía </h1><div><p> Encargados de proteger a la comunidad </p><p> Av. Usme 96ª-97</p></div></div>', 4.495351,-74.107412, 1],
        ​ ['<div class="infoWindow" ><h1 > Estaciones de Policía </h1><div><p> Encargados de proteger a la comunidad </p><p> Tv. 33  48C-21 Sur</p></div></div>', 4.585635,-74.133267, 1],
        ​ ['<div class="infoWindow" ><h1 > Estaciones de Policía </h1><div><p> Encargados de proteger a la comunidad </p><p> Calle 64D  79-25 Sur</p></div></div>', 4.573099,-74.096919, 1],
        ​ ['<div class="infoWindow" ><h1 > Estaciones de Policía </h1><div><p> Encargados de proteger a la comunidad </p><p> Calle 41D Sur 81-43</p></div></div>', 4.628264,-74.165469, 1],
        ​ ['<div class="infoWindow" ><h1 > Estaciones de Policía </h1><div><p> Encargados de proteger a la comunidad </p><p> Cra. 98  18-90</p></div></div>', 4.63838,-74.191308, 1],
        ​ ['<div class="infoWindow" ><h1 > Estaciones de Policía </h1><div><p> Encargados de proteger a la comunidad </p><p> Cra. 78  70-58</p></div></div>', 4.624927,-74.146528, 1],
        ​ ['<div class="infoWindow" ><h1 > Estaciones de Policía </h1><div><p> Encargados de proteger a la comunidad </p><p> Cra. 92  143-30</p></div></div>', 4.724992,-74.04582, 1],
        ​ ['<div class="infoWindow" ><h1 > Estaciones de Policía </h1><div><p> Encargados de proteger a la comunidad </p><p> Calle 72  50-81</p></div></div>', 4.691601,-74.100119, 1],
        ​ ['<div class="infoWindow" ><h1 > Estaciones de Policía </h1><div><p> Encargados de proteger a la comunidad </p><p> Cra 13  39-86</p></div></div>', 4.594186,-74.085822, 1],
        ​ ['<div class="infoWindow" ><h1 > Estaciones de Policía </h1><div><p> Encargados de proteger a la comunidad </p><p> Cra. 24  12-50</p></div></div>', 4.609278,-74.0889, 1],
        ​ ['<div class="infoWindow" ><h1 > Estaciones de Policía </h1><div><p> Encargados de proteger a la comunidad </p><p> Cra. 19  20-84 Sur</p></div></div>', 4.583806,-74.103688, 1],
        ​ ['<div class="infoWindow" ><h1 > Estaciones de Policía </h1><div><p> Encargados de proteger a la comunidad </p><p> Diag. 257 A-27</p></div></div>', 4.710989,-74.072092, 1],
        ​ ['<div class="infoWindow" ><h1 > Estaciones de Policía </h1><div><p> Encargados de proteger a la comunidad </p><p> Cra. 7  4-12</p></div></div>', 4.611607,-74.069402, 1],
        ​ ['<div class="infoWindow" ><h1 > Estaciones de Policía </h1><div><p> Encargados de proteger a la comunidad </p><p> Calle 27  Cra. 24 C</p></div></div>', 4.57686,-74.104014, 1],
        ​ ['<div class="infoWindow" ><h1 > Estaciones de Policía </h1><div><p> Encargados de proteger a la comunidad </p><p> Carrera 17  62 A -25</p></div></div>', 4.649137,-74.06781, 1],
        ​ ['<div class="infoWindow" ><h1 > Estaciones de Policía </h1><div><p> Encargados de proteger a la comunidad </p><p> Av. El Dorado 93-30</p></div></div>', 4.684928,-74.1243, 1],
        ​ ['<div class="infoWindow" ><h1 > Estaciones de Policía </h1><div><p> Encargados de proteger a la comunidad </p><p> TERMINAL DE TRANSPORTES</p></div></div>', 4.597159,-74.176417, 1],
        ​ ['<div class="infoWindow" ><h1 > Estaciones de Policía </h1><div><p> Encargados de proteger a la comunidad </p><p> Av. Caracas  6 - 51</p></div></div>', 4.59757,-74.08414, 1],
        ['<div class="infoWindow" ><h1 >Fundacion de la Mujer</h1><div><p>Principal institución microfinanciera no regulada de Colombia, está comprometida con el mejoramiento de la calidad de vida y el progreso de los negocios de sus clientes. </p><p>Pagina Web <a href="https://www.fundaciondelamujer.com/" target="_blank">https://www.fundaciondelamujer.com/</a></p></div></div>', 4.653594, -74.060979, 1],
        ['<div class="infoWindow" ><h1 >Secretaria de la Mujer</h1><div><p>Tiene por objeto liderar, dirigir, coordinar, articular y ejecutar las etapas de diseño, formulación,  implementación, seguimiento y evaluación de políticas públicas para las mujeres, a través de la coordinación intra e intersectorial, territorial y poblacional de estas políticas públicas, así como de los planes, programas y proyectos que le corresponda para el reconocimiento, garantía y restitución de los derechos y el fomento de las capacidades y oportunidades de las mujeres. </p><p>Pagina Web <a href="http://www.sdmujer.gov.co/" target="_blank">http://www.sdmujer.gov.co/</a></p></div></div>', 4.659553, -74.105907, 2],
        ['<div class="infoWindow" ><h1 >Sisma Mujer</h1><div><p>En Sisma Mujer brindamos asesoría en casos de violencia sexual, violencia doméstica y asesinato de mujeres por el hecho de serlo (feminicidios), tanto en espacios cotidianos como derivados del conflicto armado. </p><p>Pagina Web <a href="http://www.sdmujer.gov.co/" target="_blank">http://www.sdmujer.gov.co/</a></p></div></div>', 4.621231, -74.068154, 3],
        ['<div class="infoWindow" ><h1 >Casa de Igualdad de Oportunidades de Chapinero</h1><div><p>Servicios : </p><ul><li>Empoderamiento de las mujeres en el ejercicio de sus derechos.</li> <li>Fortalecimiento a grupos, redes y organizaciones de mujeres y de las instancias de coordinación de la PPMYEG en el nivel local.</li> <li>Prevención y atención de Violencias contra las mujeres. </li> <li>Orientación y acercamiento a la oferta institucional. </li> <li>Territorialización de PIOEG.</li></ul><p>Pagina Web <a href="http://www.sdmujer.gov.co/component/content/article/2-uncategorised/42-casas-de-igualdad-y-oportunidades" target="_blank">http://www.sdmujer.gov.co/</a></p></div></div>', 4.641075, -74.063846, 4],
        ['<div class="infoWindow" ><h1 >CIASE</h1><div><p>Es una organización feminista mixta, que promueve la exigibilidad permanente y la realización integral de los Derechos Humanos en particular los derechos económicos, sociales, culturales y ambientales.</p><p>Pagina Web <a href="http://ciase.org/es/" target="_blank">http://ciase.org/es/</a></p></div></div>', 4.628577, -74.069373, 5],
        ['<div class="infoWindow" ><h1 >Iniciativa Mujeres Colombianas por la Paz</h1><div><p>Contribuir a la contrucción de la paz desde la defensa de los derechos humanos con enfoque de género y con especial énfasis en las mujeres </p><p>Pagina Web <a href="http://www.mujeresporlapaz.org/" target="_blank">http://www.mujeresporlapaz.org/</a></p></div></div>', 4.660718, -74.063273, 6],
        ['<div class="infoWindow" ><h1 >Iniciativa Mujeres Colombianas por la Paz</h1><div><p>La Corporación CENTRAP es una organización no gubernamental sin ánimo de lucro que busca contribuir al desarrollo justo, sustentable y democrático de la sociedad colombiana con perspectiva de inclusión social en equidad entre géneros, clases y étnias, por medio de la investigación, fortalecimiento organizacional, la formación y la sistematización; en las áreas de participación política y ciudadanía, género y desarrollo, manejo sustentable del medio ambiente y emprendimientos económicos en comunidades rurales y urbanas del país.</p><p>Pagina Web <a href="http://centrap.org.co/" target="_blank">http://centrap.org.co/</a></p></div></div>', 4.633830, -74.063619, 7],
        ['<div class="infoWindow" ><h1 >Red Nacional de Mujeres</h1><div><p>Hemos tenido presencia en diversos procesos en pro de la garantía, promoción y defensa de los derechos de las mujeres en Colombia, sin embargo nuestro trabajo se ha centrado en tres ejes específicos: participación política y construcción de ciudadanía de las mujeres, eliminación de las diferentes violencias ejercidas contra las mujeres, y participación de las mujeres en procesos y construcción de paz. </p><p>Pagina Web <a href="https://www.rednacionaldemujeres.org/" target="_blank">https://www.rednacionaldemujeres.org/</a></p></div></div>', 4.640889, -74.064801, 8],
        ['<div class="infoWindow" ><h1 >Ruta Pacifica</h1><div><p>La Ruta Pacífica de las Mujeres es un movimiento feminista que trabaja por la tramitación negociada del conflicto armado en Colombia</p><p>Pagina Web <a href="http://rutapacifica.org.co/" target="_blank">http://rutapacifica.org.co/</a></p></div></div>', 4.644695, -74.079842, 9]
];


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  map: any;



  constructor(
    private navCtrl: NavController,
    private geolocation: Geolocation
  ) { }

  ionViewDidLoad() {
    this.getPosition();
  }

  getPosition(): any {
    this.geolocation.getCurrentPosition()
      .then(response => {
        this.loadMap(response);
      })
      .catch(error => {
        console.log(error);
      })
  }

  loadMap(position: Geoposition) {

    
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

    var infowindow = new google.maps.InfoWindow({
      maxWidth: 200,
      maxHeight: 200
    });
    var marker, i;

    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    console.log(latitude, longitude);

    // create a new map by passing HTMLElement
    let mapEle: HTMLElement = document.getElementById('map');

    // create LatLng object
    let myLatLng = { lat: latitude, lng: longitude };
    

    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 15,
      disableDefaultUI: true
    });

    this.map.mapTypes.set('styled_map', styledMapType);
    this.map.setMapTypeId('styled_map');


    for (i = 0; i < locations.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: this.map,
        icon: '../../assets/imgs/maker2.png'
      });
      mapEle.classList.add('show-map');

      google.maps.event.addListenerOnce(marker, 'click', (function (marker, i) {
        return function () {
          infowindow.setContent(locations[i][0]);
          infowindow.open(this.map, marker);
          
        }
      })(marker, i));
    }

      
    /* google.maps.event.addListenerOnce(this.map, 'idle', () => {
      let marker = new google.maps.Marker({
        position: myLatLng,
        map: this.map,
        title: 'Hello World!'
      });
      mapEle.classList.add('show-map');
    }); */
  }
}