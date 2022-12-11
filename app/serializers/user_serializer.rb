class UserSerializer < ActiveModel::Serializer
  attributes :id, :name
  
  has_many :visits
  has_many :secret_spots

end
