class ApplicationController < ActionController::API
  include ActionController::Cookies
  # set up rescue_froms for error handling


  def current_user
    User.find(session[:current_user]) # with find we don't have to include a bang operator for the exception to be raised
  end

  def authorized_user
    render json: { error: "Not Authorized" }, status: :unauthorized unless current_user
  end
  
  private
  # set up methods for error handling corresponding to rescue_from error handling


end
