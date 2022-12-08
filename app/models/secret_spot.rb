class SecretSpot < ApplicationRecord
    has_many :visits
    has_many :users, through: :visits

    validates :name, presence: true, uniqueness: true
end
