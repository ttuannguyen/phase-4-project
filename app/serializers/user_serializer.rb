class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :password_digest
  
  has_many :visits
  has_many :secret_spots

end