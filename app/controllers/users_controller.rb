class UsersController < ApplicationController

    def index
        users = User.all
        render json: users
    end

    # GET "/users/:id"
    def show 
        # byebug
        current_user = User.find(session[:user_id]) 
        if current_user 
            render json: current_user
        else 
            render json: { error: "Not Authorized" }, status: :unauthorized 
        end
        # render json: current_user # because we have current_user inhertied from App controller
    end

    # POST "/users"
    def create
        # session[:user_id] = user.id # to login a user, take the user id and make it persist 
        user = User.create!(user_params) # create the user using the params passed in
        session[:current_user] = user.id #associate that user with our session
        # byebug
        render json: user, status: :created
        # to add error handling with if/else
    end

    # PUT "/users:id"
    # def update
    #     user = User.find_by(id: params[:id])
    #     user.update(params)
    #     render json: user
    # end

    # def destroy
    #     user = User.find_by(id: params[:id])
    #     user.destroy
    #     head :no_content 
    # end

    private 

    def user_params
        params.permit(:name, :email, :password, :password_confirmation)
    end

end
