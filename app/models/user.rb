class User < ApplicationRecord
    has_secure_password
    has_many :visits
    has_many :secret_spots, -> { distinct }, through: :visits
    
    # validates :username, presence: true, uniqueness: true
    # validates :password, :password_confirmation, presence: true
    
end
