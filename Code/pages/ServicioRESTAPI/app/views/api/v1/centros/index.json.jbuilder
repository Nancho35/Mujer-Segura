json.array! @centros do |centro|
  json.nombre centro.nombre
  json.descripcion centro.descripcion
  json.url centro.url
  json.latitud centro.latitud
  json.longitud centro.longitud
  json.id centro.id
end
