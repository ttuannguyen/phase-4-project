class SecretSpot < ApplicationRecord
    has_many :visits
    has_many :users, through: :visits

    validates :name, presence: true, uniqueness: true
    validates :location, :description, :cost, presence: true
    
end
