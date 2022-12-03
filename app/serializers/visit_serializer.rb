class VisitSerializer < ActiveModel::Serializer
  # attributes :id, :date, :comment
  attributes :id, :date, :comment, :secret_spot, :user

  # method to return only the name of the secret spot
  def secret_spot
    # byebug
    object.secret_spot.name
  end

  # method to return only the name of the user
  def user
    # byebug
    object.user.name
  end
  
  # def date
  #   "Date of visit: #{object.date}"
  # end

end
