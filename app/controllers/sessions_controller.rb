class SessionsController < ApplicationController
    # add action to handle login
    # find user via the username param
    # if authenticates, render user as json with "ok" status. if not, render error

    # logging in
    def login 
        user = User.find_by(name: params[:name])
        
        # TODO: fix error handling to show an input can't be blank and when the password is incorrect
        # if user.valid? 
        #     user.authenticate(params[:password])
        #     # byebug
        #     session[:user_id] = user.id
        #     # session[:current_user] = user.id
        #     render json: user, status: :ok
        # else
        #     render json: { errors: user.errors.full_messages }, status: :unauthorized
        # end
        
        if user&.authenticate(params[:password])
            # byebug
            session[:user_id] = user.id
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
