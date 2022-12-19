class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  # has_many :secret_spots, through: :visits
  has_many :visits


end
