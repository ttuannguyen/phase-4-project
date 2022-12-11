class SecretSpotSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :description, :cost

  # has_many :users
  has_many :visits, serializer: SecretSpotVisitSerializer

  # def cost
  #   "$#{'%.2f' %object.cost}"
  # end

end
