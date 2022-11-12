class SessionsController < ApplicationController
    # add action to handle login
    # find user 
    # if authenticates, render user as json with "ok" status. if not, render error
    def login 
        byebug
        user = User.find_by!(name: params[:username])
        # render json: "logging in"
    end
    
end

