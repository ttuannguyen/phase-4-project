class SecretSpotsController < ApplicationController
    def index
        secret_spots = SecretSpot.all
        render json: secret_spots
    end

    def show
        secret_spot = SecretSpot.find(params[:id])
        render json: secret_spot
    end

    def create
        secret_spot = SecretSpot.create(params)
        render json: secret_spot
    end

end
