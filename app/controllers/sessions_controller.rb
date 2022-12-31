class SessionsController < ApplicationController
    skip_before_action :authorized, only: [:login]
    # add action to handle login

    def login 
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :ok
        else
            render json: { error: "Invalid username or password!"}, status: :unauthorized
        end
    end

    def logout
        session.delete(:user_id)
        head :no_content
    end

    private 

    def user_params
        params.permit(:username, :password)
    end

end
