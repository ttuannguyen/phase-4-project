class SecretSpotsController < ApplicationController
    # GET "/secret_spots"
    
    def index
        render json: SecretSpot.all
    end

    # GET "/secret_spots/:id"
    def show
        secret_spot = SecretSpot.find_by(id: params[:id])
        if secret_spot
            render json: secret_spot.to_json, status: :ok
        else
            render json: { error: "Secret spot not found", status: :unauthorized}
        end
    end

    # POST "/secret_spots"
    def create
        secret_spot = SecretSpot.create!(secret_spot_params)
        render json: secret_spot, status: :created
    end


    private 
    def secret_spot_params
        params.permit(:name, :location, :description, :cost)
    end

end