class User < ApplicationRecord
    has_many :visits
    has_many :secret_spots, through: :visits
end
