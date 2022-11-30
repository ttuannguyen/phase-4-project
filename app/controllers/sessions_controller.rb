class SessionsController < ApplicationController
    # add action to handle login
    # find user via the username param
    # if authenticates, render user as json with "ok" status. if not, render error

    # logging in
    def login 
        user = User.find_by!(name: params[:username])

        # render json: user
        if user&.authenticate(params[:password])
            # byebug
            session[:user_id] = user.id
            # session[:current_user] = user.id
            render json: user, status: :ok
        else
            render json: { errors: "Invalid username or password!"}, status: :unprocessable_entity
        end
    end

    # logging out
    def logout
        session.delete :current_user
    end

end
