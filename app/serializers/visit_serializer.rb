class VisitSerializer < ActiveModel::Serializer
  attributes :id, :date, :note, :secret_spot_id, :secret_spot, :user_id
  # belongs_to :secret_spot
  
  # method to return only the name of the secret spot
  def secret_spot
    object.secret_spot.name
  end

end
