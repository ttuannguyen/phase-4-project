class UsersController < ApplicationController
    def index
        users = User.all
        render json: users
    end

    # to build full CRUD functionality 
    def show 
        #
    end

    def create
        # 
    end

    def update
        #
    end

    def destroy
        #
    end


end
