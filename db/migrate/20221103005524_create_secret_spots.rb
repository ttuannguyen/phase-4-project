class CreateSecretSpots < ActiveRecord::Migration[6.1]
  def change
    create_table :secret_spots do |t|

      t.timestamps
    end
  end
end
