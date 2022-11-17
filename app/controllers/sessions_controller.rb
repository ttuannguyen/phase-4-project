class SessionsController < ApplicationController
    # add action to handle login
    # find user via the username param
    # if authenticates, render user as json with "ok" status. if not, render error

    def login 
        
        # byebug
        
        user = User.find_by!(name: params[:username])
        # session[:user_id] = user.id
        # render json: user
        if user&.authenticate(params[:password])
            render json: { user: "Welcome" }, status: :ok
        else
            render json: { errors: "Invalid username or password!"}, status: :unprocessable_entity
        end
    end

end
