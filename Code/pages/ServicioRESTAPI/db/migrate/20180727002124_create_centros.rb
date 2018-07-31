class CreateCentros < ActiveRecord::Migration[5.2]
  def change
    create_table :centros do |t|
      t.string :nombre
      t.text :descripcion
      t.string :url
      t.string :latitud
      t.string :longitud

      t.timestamps
    end
  end
end
