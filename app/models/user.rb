class User < ApplicationRecord
    # when we create our user, bcrypt will take our password, hash it, and save the hashed pw to the password_digest att
    has_secure_password

    has_many :visits
    has_many :secret_spots, -> { distinct }, through: :visits

    # validates :name, presence: true, uniqueness: true
    # validates :email, presence: true, uniqueness: true
    # validates :password, presence: true
    # validates :password, :password_confirmation, presence: true
    
end
