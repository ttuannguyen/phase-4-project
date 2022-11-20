class SecretSpotSerializer < ActiveModel::Serializer
  attributes :id, :location, :description, :cost
end
