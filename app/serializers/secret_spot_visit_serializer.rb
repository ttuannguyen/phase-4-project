class SecretSpotVisitSerializer < ActiveModel::Serializer
  attributes :id, :date, :note, :user

  #TODO: consider removing this serializer or the user attribute
  def user
    object.user.username
  end

end
