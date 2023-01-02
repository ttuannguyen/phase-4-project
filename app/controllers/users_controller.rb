class UsersController < ApplicationController
    skip_before_action :authorized, only: [:create]
    
    # GET "/users/:id"
    def show 
        # user = current_user
        render json: current_user
        # byebug
        # if user
        #     render json: user
        #     # render json: user, include: ['secret_spots', 'secret_spots.visits']
        #     # if we want to override the 2-level deep nesting of AMS, use :include
        # else 
        #     render json: { error: "Not authorized" }, status: :unauthorized
        # end
    end

    # GET "/users/:user_id/visits"
    def visits_index
        # user = User.find_by(id: session[:user_id])
        visits = current_user.visits
        render json: visits
    end

    def visits_index_visit
        visits = current_user.visits
        visit = visits.find_by(id: params[:visit_id])
        render json: visit
    end

    # POST "/users"
    def create
        # session[:user_id] = user.id # to login a user, take the user id and make it persist 
        user = User.create!(user_params) # create the user using the params passed in
        # session[:current_user] = user.id #associate that user with our session, key inside sess hash can be anything 
        session[:user_id] = user.id
        render json: user, status: :created

        # if user.valid?
        #     session[:user_id] = user.id
        #     render json: user, status: :created
        # else
        #     render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        # end

    #     session[:user_id] = user.id
    #     render json: user, status: :accepted
    # rescue ActiveRecord::RecordInvalid => invalid
    #     byebug
    #     render json: { error: invalid.record.errors }, status: :unprocessable_entity
    end


    private 

    # def current_user
    #     # byebug
    #     User.find_by(id: session[:user_id])
    # end
    
    
    def user_params
        # params.permit(:name, :email, :password, :password_confirmation)
        params.permit(:username, :password, :password_confirmation)
    end

end
