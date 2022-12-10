class User < ApplicationRecord
    # when we create our user, bcrypt will take our password, hash it, and save the hashed pw to the password_digest att
    has_secure_password

    has_many :visits
    has_many :secret_spots, -> { distinct }, through: :visits

    
    validates :name, presence: true, uniqueness: true # TODO: create name vs username; 
    validates :email, presence: true, uniqueness: true # TODO: validate email type for email
    validates :password, presence: true # TODO: requirements for password
    validates :password, :password_confirmation, presence: true
    
end
