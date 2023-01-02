class CreateSecretSpots < ActiveRecord::Migration[6.1]
  def change
    create_table :secret_spots do |t|
      t.string :name
      t.string :location
      t.text :description
      t.float :cost

      t.timestamps
    end
  end
end
