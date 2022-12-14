class ApplicationController < ActionController::API
  include ActionController::Cookies
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

  # rescue_from LISTENERS

  # def current_user
  #   @current_user ||= User.find(session[:current_user]) if session[:user_id] # with find we don't have to include a bang operator for the exception to be raised
  # end

  # def authorized_user
  #   render json: { error: "Not Authorized" }, status: :unauthorized unless current_user
  # end
  
  private
  # set up methods for error handling corresponding to rescue_from error handling

  def current_user
    # byebug
    User.find_by(id: session[:user_id])
  end

  def render_unprocessable_entity(invalid) # pass in the invalid param
    # byebug
    render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
end
  


end
