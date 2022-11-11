class UsersController < ApplicationController
    
    def index
        users = User.all
        render json: users
    end

    def show 
        user = User.find_by(id: params[:id])
        render json: user
    end

    def create
        user = User.create!(params)
        render json: user, status: :created
    end

    def update
        user = User.find_by(id: params[:id])
        user.update(params)
        render json: user
    end

    def destroy
        user = User.find_by(id: params[:id])
        user.destroy
        head :no_content 
    end


end
