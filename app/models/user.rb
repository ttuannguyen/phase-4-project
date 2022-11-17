class User < ApplicationRecord
    has_secure_password

    has_many :visits
    has_many :secret_spots, through: :visits
    
end
