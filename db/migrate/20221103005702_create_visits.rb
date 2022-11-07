class CreateVisits < ActiveRecord::Migration[6.1]
  def change
    create_table :visits do |t|
      t.string :date
      t.string :comment

      t.timestamps
    end
  end
end
