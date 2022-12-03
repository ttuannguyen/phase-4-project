class SecretSpotsController < ApplicationController

    before_action :authorize

    def all 
        render json: SecretSpot.all
    end
    
    
    def index
        secret_spots = current_user.secret_spots
        render json: secret_spots
    end

    def show
        secret_spot = current_user.secret_spots.find_by(id: params[:id])
        render json: secret_spot
        if secret_spot
            render json: secret_spot, status: :ok
        else
            render json: { error: "Secret spot not found", status: :unauthorized}
        end
    end

    def create
        secret_spot = current_user.secret_spots.create(secret_spot_params)
        if secret_spot.valid?
            render json: secret_spot, status: :created
        else
            render json: { errors: secret_spot.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private 

    def current_user
        # byebug
        User.find_by(id: session[:user_id])
    end

    def secret_spot_params
        params.permit(:name, :location, :description, :cost)
    end

    def authorize
        return render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :user_id
    end

end
