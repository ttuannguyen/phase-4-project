class AddSecretSpotIdAndUserIdToVisits < ActiveRecord::Migration[6.1]
  def change
    add_column :visits, :secret_spot_id, :integer, null: false
    add_column :visits, :user_id, :integer, null: false
  end
end
