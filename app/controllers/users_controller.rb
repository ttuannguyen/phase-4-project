class UsersController < ApplicationController

    # def index
    #     users = User.all
    #     render json: users
    # end

    def show 
        user = User.find_by(id: params[:id])
        render json: user
    end

    def create
        # session[:user_id] = user.id # to login a user, take the user id and make it persist 
        user = User.create!(user_params)
        render json: user, status: :created
        # to add error handling with if/else
    end

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
        params.permit(:name, :email, :password)
    end

end
