class UsersController < ApplicationController
    skip_before_action :authorized, only: [:create]
    
    # GET "/users/:id"
    def show 
        render json: current_user
    end

    # GET "/users/:user_id/visits"
    def visits_index
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
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end


    private 
    def user_params
        params.permit(:username, :password, :password_confirmation)
    end

end
