class ApplicationController < ActionController::API
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
  before_action :authorized

  include ActionController::Cookies
  # before_action :authorized
  # rescue_from listener

  # def current_user
  #   @current_user ||= User.find(session[:current_user]) if session[:user_id] # with find we don't have to include a bang operator for the exception to be raised
  # end

  def current_user
    # byebug
    User.find_by(id: session[:user_id])
  end

  def authorized
    # byebug
    return render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :user_id
  end

  private

  def render_unprocessable_entity(invalid) # pass in the invalid param
    # byebug
    render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end
  


end
