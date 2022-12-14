class UserSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :secret_spots, through: :visits
  has_many :visits


end
