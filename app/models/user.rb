class User < ApplicationRecord
    has_secure_password

    has_many :visits
    has_many :secret_spots, -> { distinct }, through: :visits

    # when we create our user, bcrypt will take our password, hash it, and save the hashed pw to the password_digest att
    
    validates :username, presence: true, uniqueness: true
    # validates :password, presence: true # TODO: requirements for password
    validates :password, :password_confirmation, presence: true
    
end
