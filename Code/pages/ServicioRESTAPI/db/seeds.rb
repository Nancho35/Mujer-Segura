# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
centro = Centro.create({nombre: 'Fundacion de la Mujer', descripcion: 'Principal institución microfinanciera no regulada de Colombia, está
comprometida con el mejoramiento de la calidad de vida y el progreso de los negocios de sus clientes.', url: 'https://www.fundaciondelamujer.com/', latitud: '4.653594', longitud: '-74.060979'})

centro = Centro.create({nombre: 'Secretaria de la Mujer', descripcion: 'Tiene por objeto liderar, dirigir,
coordinar, articular y ejecutar las etapas de diseño, formulación,  implementación, seguimiento y evaluación de políticas
públicas para las mujeres, a través de la coordinación intra e intersectorial, territorial y poblacional de estas políticas
públicas, así como de los planes, programas y proyectos que le corresponda para el reconocimiento, garantía y restitución
de los derechos y el fomento de las capacidades y oportunidades de las mujeres.', url: 'http://www.sdmujer.gov.co/', latitud: '4.659553', longitud: '-74.105907'})

centro = Centro.create({nombre: 'Sisma Mujer', descripcion: 'En Sisma Mujer brindamos asesoría en casos de violencia sexual, violencia
doméstica y asesinato de mujeres por el hecho de serlo (feminicidios), tanto en espacios cotidianos como derivados del conflicto armado.', url: 'http://www.sdmujer.gov.co/', latitud: '4.621231', longitud: '-74.068154'})

centro = Centro.create({nombre: 'Casa de Igualdad de Oportunidades de Chapinero', descripcion: 'Empoderamiento de las mujeres en el ejercicio de
sus derechos.Fortalecimiento a grupos, redes y organizaciones de mujeres y de las instancias de coordinación de
la PPMYEG en el nivel local.Prevención y atención de Violencias contra las mujeres. Orientación y
acercamiento a la oferta institucional.Territorialización de PIOEG.', url: 'http://www.sdmujer.gov.co/component/content/article/2-uncategorised/42-casas-de-igualdad-y-oportunidades', latitud: '4.641075', longitud: '-74.063846'})

centro = Centro.create({nombre: 'CIASE', descripcion: 'Es una organización feminista mixta, que promueve la exigibilidad permanente y la realización integral
de los Derechos Humanos en particular los derechos económicos, sociales, culturales y ambientales.', url: 'http://ciase.org/es/', latitud: '4.628577', longitud: '-74.069373'})

centro = Centro.create({nombre: 'Iniciativa Mujeres Colombianas por la Paz', descripcion: 'Contribuir a la contrucción de la paz desde la
defensa de los derechos humanos con enfoque de género y con especial énfasis en las mujeres.', url: 'http://www.mujeresporlapaz.org/', latitud: '4.660718', longitud: '-74.063273'})

centro = Centro.create({nombre: 'CENTRAP', descripcion: 'La Corporación CENTRAP es una
organización no gubernamental sin ánimo de lucro que busca contribuir al desarrollo justo, sustentable y democrático de la
sociedad colombiana con perspectiva de inclusión social en equidad entre géneros, clases y étnias, por medio de la
investigación, fortalecimiento organizacional, la formación y la sistematización; en las áreas de participación política y
ciudadanía, género y desarrollo, manejo sustentable del medio ambiente y emprendimientos económicos en comunidades rurales
y urbanas del país.', url: 'http://centrap.org.co/', latitud: '4.633830', longitud: '-74.063619'})

centro = Centro.create({nombre: 'Red Nacional de Mujeres', descripcion: 'Hemos tenido presencia en diversos procesos en pro de la garantía, promoción y defensa de los derechos
de las mujeres en Colombia, sin embargo nuestro trabajo se ha centrado en tres ejes específicos: participación política y
construcción de ciudadanía de las mujeres, eliminación de las diferentes violencias ejercidas contra las mujeres, y
participación de las mujeres en procesos y construcción de paz.', url: 'https://www.rednacionaldemujeres.org/', latitud: '4.640889', longitud: '-74.064801'})

centro = Centro.create({nombre: 'Ruta Pacifica', descripcion: 'La Ruta Pacífica de las Mujeres es un movimiento
feminista que trabaja por la tramitación negociada del conflicto armado en Colombia', url: 'http://rutapacifica.org.co/', latitud: '4.644695', longitud: '-74.079842'})
