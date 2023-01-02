class SecretSpotSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :description, :cost, :user_visits
  
  # TO DO: limit to the visits to show the ones belong to the user only 
  has_many :visits #, serializer: SecretSpotVisitSerializer
  # has_many :users, through: :visits, serializer: SecretSpotUserSerializer

  def user_visits
    # byebug
    user_visits = current_user.visits.where('secret_spot_id = ?', object.id)

    # object's user id = current_user.id
    # current_user.visits
  end
  
  def cost
    "$#{'%.2f' %object.cost}"
  end

end