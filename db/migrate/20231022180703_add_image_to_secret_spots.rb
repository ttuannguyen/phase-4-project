class AddImageToSecretSpots < ActiveRecord::Migration[6.1]
  def change
    add_column :secret_spots, :image_url, :string
  end
end
