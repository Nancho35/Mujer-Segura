class Centro < ApplicationRecord
  validates :nombre, presence: true
  validates :descripcion, presence: true
  validates :url, presence: true
  validates :latitud, presence: true
  validates :longitud, presence: true
end
