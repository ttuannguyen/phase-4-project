class UsersController < ApplicationController

    # def index
    #     users = User.all
    #     render json: users
    # end

    # GET "/users/:id"
    def show 
        user = User.find_by(id: session[:user_id])
        # byebug
        if user
            # render json: user
            render json: user, include: ['secret_spots', 'secret_spots.visits']
            # if we want to override the 2-level deep nesting of AMS, use :include
        else 
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    # POST "/users"
    def create
        # session[:user_id] = user.id # to login a user, take the user id and make it persist 
        user = User.create(user_params) # create the user using the params passed in
        if user.valid?
            # session[:current_user] = user.id #associate that user with our session, key inside sess hash can be anything 
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end

    #     session[:user_id] = user.id
    #     render json: user, status: :accepted
    # rescue ActiveRecord::RecordInvalid => invalid
    #     byebug
    #     render json: { error: invalid.record.errors }, status: :unprocessable_entity
    end

    # PUT "/users:id"
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
        # params.permit(:name, :email, :password)
        params.permit(:name, :email, :password, :password_confirmation)
    end

end
