class SessionsController < ApplicationController
    # add action to handle login
    # find user via the username param
    # if authenticates, render user as json with "ok" status. if not, render error

    def login 
        
        # byebug
        
        user = User.find_by!(name: params[:username])

        # render json: user
        if user&.authenticate(params[:password])
            # session[:user_id] = user.id
            session[:current_user] = user.id
            # session[:login_attempts] = 0
            render json: user, status: :ok
        else
            # set login attempts to 0 if undefined/falsy
            # session[:login_attempts] ||= 0
            # session[:login_attempts] += 0

            render json: { errors: "Invalid username or password!"}, status: :unprocessable_entity
        end
    end


end
