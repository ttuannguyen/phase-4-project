class SessionsController < ApplicationController
    skip_before_action :authorized, only: [:login]
    # add action to handle login

    # logging in
    def login 
        user = User.find_by(name: params[:name])
        
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            # byebug
            # session[:current_user] = user.id
            render json: user, status: :ok
        else
            render json: { error: "Invalid username or password!"}, status: :unauthorized
        end
    end

    # logging out
    def logout
        # session.delete :current_user
        # session.clear
        session.delete(:user_id)
        head :no_content
    end

    private 

    def user_params
        params.permit(:name, :password)
    end

end
