class SecretSpotSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :description, :cost, :visits
  # has_many :visits

  def visits
    user_visits = current_user.visits.where('secret_spot_id = ?', object.id)
  end
  
  def cost
    "$#{'%.2f' %object.cost}"
  end

end