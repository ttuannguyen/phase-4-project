class User < ApplicationRecord
    has_many :visits
    has_many :secret_spots, through: :visits

    has_secure_password
end
