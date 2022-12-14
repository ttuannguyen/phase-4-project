class VisitSerializer < ActiveModel::Serializer
  # attributes :id, :date, :note
  attributes :id, :date, :note
  # belongs_to :user
  # belongs_to :secret_spot

  
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
