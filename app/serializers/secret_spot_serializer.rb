class SecretSpotSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :description, :cost

  has_many :visits, serializer: SecretSpotVisitSerializer
  has_many :users, serializer: SecretSpotUserSerializer

  def cost
    "$#{'%.2f' %object.cost}"
  end

end
